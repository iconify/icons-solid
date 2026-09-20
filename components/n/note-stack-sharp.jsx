import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjemujb8r {
  fill: currentColor;
  d: path("M7 22V6.975h15V17l-5 5zm13-6h-4v4zM4.3 19.075L1.675 4.3L16.45 1.675L17.05 5H5v13.95z");
}
</style><path class="bjemujb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:note-stack-sharp"} {...others} />);
}

export default Component;
