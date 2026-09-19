import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.euaikwuud {
  fill: currentColor;
  d: path("M17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5zM1.49 3.76L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72l1.41-1.41L2.9 2.35zM7 9.27L16.73 19H7z");
}
</style><path class="euaikwuud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-mobile-off"} {...others} />);
}

export default Component;
