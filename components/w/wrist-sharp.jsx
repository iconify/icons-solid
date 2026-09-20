import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8i_ni5lj {
  fill: currentColor;
  d: path("M11 21.9L6.1 17H1V7h4.6l1.95-2H20v2h-6v1.5h8v2h-8V12h9v2h-9v1.5h7v2h-8.875l1.125 2.225z");
}
</style><path class="z8i_ni5lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wrist-sharp"} {...others} />);
}

export default Component;
