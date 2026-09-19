import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lbzu55bjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.045 14.219c0 3.61-2.938 6.537-6.563 6.537h0c-3.624 0-6.563-2.927-6.563-6.537h0c0-3.61 2.939-6.537 6.563-6.537h.001c3.624 0 6.562 2.927 6.562 6.537");
}

.tgvg35bcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 4.5h26v39H11z");
}

.wu_9i-bso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.08 30.333c0 5.515-4.487 9.985-10.024 9.985h0c-5.536 0-10.024-4.47-10.024-9.985s4.488-9.986 10.024-9.986s10.025 4.471 10.025 9.986");
}
</style><path class="wu_9i-bso"/><path class="lbzu55bjb"/><path class="tgvg35bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:harmonoid"} {...others} />);
}

export default Component;
