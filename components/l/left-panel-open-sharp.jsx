import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vl4eejpgx {
  fill: currentColor;
  d: path("M12.5 8v8l4-4zM10 19h9V5h-9zm-7 2V3h18v18z");
}
</style><path class="vl4eejpgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:left-panel-open-sharp"} {...others} />);
}

export default Component;
