import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bullqbc4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.274 36.644a3.69 3.69 0 0 1-3.183-1.818l-10.54-17.909a3.689 3.689 0 0 1 6.358-3.742l10.54 17.908a3.69 3.69 0 0 1-3.175 5.561");
}

.s4lb-9isk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.27 25.682l7.361-12.507a3.689 3.689 0 0 1 6.359 3.742L32.45 34.826M18.73 22.319l-7.361 12.507a3.689 3.689 0 0 1-6.358-3.743l10.54-17.908");
}
</style><path class="bullqbc4n"/><path class="s4lb-9isk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:namecheap"} {...others} />);
}

export default Component;
