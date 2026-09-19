import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.squl39bsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.669 24H27.11a6.724 6.724 0 0 1 6.717 6.732h0a6.724 6.724 0 0 1-6.717 6.731H15.834M27.11 24H43.5m0 0v-4.683M38.817 24v-4.683");
}

.tokixl7-j {
  cx: 8.597px;
  cy: 24px;
  r: 4.097px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vhjpkacdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.834 37.463V10.537m0 0H27.11a6.724 6.724 0 0 1 6.717 6.732h0A6.724 6.724 0 0 1 27.11 24H15.834");
}
</style><path class="vhjpkacdq"/><path class="squl39bsf"/><circle class="tokixl7-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:blur"} {...others} />);
}

export default Component;
