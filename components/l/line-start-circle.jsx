import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.snh65tyqt {
  fill: currentColor;
  d: path("M8 18q-2.5 0-4.25-1.75T2 12t1.75-4.25T8 6q2.25 0 3.913 1.425T13.925 11H22v2h-8.075q-.35 2.15-2.013 3.575T8 18");
}
</style><path class="snh65tyqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-circle"} {...others} />);
}

export default Component;
