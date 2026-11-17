import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mktt5qbdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 13h2a2 2 0 0 1 2 2v4a2 2 0 1 0 4 0v-8.092a2 2 0 0 0-.683-1.506l-6-5.25a2 2 0 0 0-2.634 0l-6 5.25A2 2 0 0 0 4 10.908V19a2 2 0 1 0 4 0v-4a2 2 0 0 1 2-2z");
}
</style><path class="mktt5qbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-garage-open"} {...others} />);
}

export default Component;
