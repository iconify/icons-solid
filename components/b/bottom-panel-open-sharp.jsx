import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohk9dkb-k {
  fill: currentColor;
  d: path("M8 11.5h8l-4-4zM5 14h14V5H5zm-2 7V3h18v18z");
}
</style><path class="ohk9dkb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-panel-open-sharp"} {...others} />);
}

export default Component;
