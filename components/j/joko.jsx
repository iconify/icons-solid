import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fyfwzvlvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.457 40.784q1.518-3.942 5.914-12.18q-4.232.465-8.237-1.18q6.58-13.94 18.835-22.252q3.918-2.146 2.399 2.562q-1.533 3.893-5.739 11.653q4.156-.3 8.237 1.08q-6.755 14.516-18.182 22.1q-4.608 2.525-3.227-1.783");
}
</style><path class="fyfwzvlvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:joko"} {...others} />);
}

export default Component;
