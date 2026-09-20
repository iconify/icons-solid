import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c97awnbuk {
  fill: var(--svg-color--f1511b, #f1511b);
  d: path("M121.666 121.666H0V0h121.666z");
}

.jlqq20lvs {
  fill: var(--svg-color--80cc28, #80cc28);
  d: path("M256 121.666H134.335V0H256z");
}

.rx_11zbpa {
  fill: var(--svg-color--fbbc09, #fbbc09);
  d: path("M256 256.002H134.335V134.336H256z");
}

.yq2qxybxe {
  fill: var(--svg-color--00adef, #00adef);
  d: path("M121.663 256.002H0V134.336h121.663z");
}
</style><path class="c97awnbuk"/><path class="jlqq20lvs"/><path class="yq2qxybxe"/><path class="rx_11zbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:microsoft-icon"} {...others} />);
}

export default Component;
