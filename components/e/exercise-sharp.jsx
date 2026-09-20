import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pa9s81bfe {
  fill: currentColor;
  d: path("m20.975 9.025l-6.05-6.05l1.85-1.85l6.15 6.175zM7.25 22.8L1.2 16.75l1.8-1.8L9.05 21zm4.325-1.4L2.6 12.425L5.425 9.55l2.3 2.3l4.15-4.15L9.6 5.425l2.825-2.875l9.025 9.025l-2.875 2.825l-2.275-2.275l-4.15 4.15l2.3 2.3z");
}
</style><path class="pa9s81bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:exercise-sharp"} {...others} />);
}

export default Component;
