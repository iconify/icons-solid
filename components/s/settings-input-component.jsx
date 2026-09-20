import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yl9zlxb9x {
  fill: currentColor;
  d: path("M3 23v-4.2q-.875-.3-1.437-1.062T1 16v-2h6v2q0 .975-.562 1.738T5 18.8V23zm8 0v-4.2q-.875-.3-1.437-1.062T9 16v-2h6v2q0 .975-.562 1.738T13 18.8V23zm8 0v-4.2q-.875-.3-1.437-1.062T17 16v-2h6v2q0 .975-.562 1.738T21 18.8V23zM1 12V6h2V2q0-.425.288-.712T4 1t.713.288T5 2v4h2v6zm8 0V6h2V2q0-.425.288-.712T12 1t.713.288T13 2v4h2v6zm8 0V6h2V2q0-.425.288-.712T20 1t.713.288T21 2v4h2v6z");
}
</style><path class="yl9zlxb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:settings-input-component"} {...others} />);
}

export default Component;
