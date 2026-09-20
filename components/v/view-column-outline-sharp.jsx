import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wysxy5bia {
  fill: currentColor;
  d: path("M3.025 19V5H21v14zM5 17h3.325V7H5zm5.325 0h3.325V7h-3.325zm5.325 0h3.325V7H15.65z");
}
</style><path class="wysxy5bia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-column-outline-sharp"} {...others} />);
}

export default Component;
