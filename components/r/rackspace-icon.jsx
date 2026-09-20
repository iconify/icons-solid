import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fnkqajb8n {
  fill: var(--svg-color--fff, #fff);
  d: path("m128.453 88.305l6.165-32.447h-38.09L68.201 204.8h43.255l11.68-61.41c6.887-36.213 27.663-50.704 57.23-46.23l8.446-44.426c-25.678-2.366-49.99 11.961-60.36 35.571z");
}

.tofpnqb0b {
  fill: var(--svg-color--ea0000, #ea0000);
  d: path("M0 0h256v256H0z");
}
</style><path class="tofpnqb0b"/><path class="fnkqajb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:rackspace-icon"} {...others} />);
}

export default Component;
