import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ig_mtb54g {
  fill: currentColor;
  d: path("M16.5 16V8l-4 4zM10 19h9V5h-9zm-7 2V3h18v18z");
}
</style><path class="ig_mtb54g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:left-panel-close-sharp"} {...others} />);
}

export default Component;
