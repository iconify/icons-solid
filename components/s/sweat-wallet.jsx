import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hjk752bfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.817 9.722l11.599 20.066l-8.001 8.49h-2.992L4.5 18.03l8.399-8.308z");
}

.tuob02blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.538 17.89l8.445-8.168h2.918L43.5 29.788l-8.001 8.49h-2.992l-5.091-8.49");
}
</style><path class="hjk752bfm"/><path class="tuob02blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sweat-wallet"} {...others} />);
}

export default Component;
