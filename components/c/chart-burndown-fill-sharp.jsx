import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nstse8s_d {
  fill: currentColor;
  d: path("M4 4v15h15.382l-3-6H14a1 1 0 0 1-.857-.486L10.434 8H7a1 1 0 0 1 0-2h4c.351 0 .677.184.857.486L14.566 11H17c.379 0 .725.214.894.553l4 8A1 1 0 0 1 21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0");
}
</style><path class="nstse8s_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-burndown-fill-sharp"} {...others} />);
}

export default Component;
