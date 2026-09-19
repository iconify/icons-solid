import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.e5xzwot2c {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 26h46v12H9z");
}

.qm7pesb5s {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ff5a79, #ff5a79);
}
</style><circle class="qm7pesb5s"/><path class="e5xzwot2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:no-entry"} {...others} />);
}

export default Component;
