import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lr8as2bsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.66 4.5V24h-6.33l11.01 19.5V24h6.33z");
}

.zxvreoboa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.34 36.55a12.76 12.76 0 0 0-.83-25.22m-3.85.12a12.76 12.76 0 0 0 .83 25.22");
}
</style><path class="lr8as2bsj"/><path class="zxvreoboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:smartflasher"} {...others} />);
}

export default Component;
