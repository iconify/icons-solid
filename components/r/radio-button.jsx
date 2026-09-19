import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.b-6js2b5t {
  cx: 32px;
  cy: 30.4px;
  r: 15px;
  fill: var(--svg-color--d9e3e8, #d9e3e8);
}

.eli0ni9xn {
  cx: 32px;
  cy: 31px;
  r: 30px;
  fill: var(--svg-color--94989b, #94989b);
}

.x-eas4bra {
  cx: 32px;
  cy: 32px;
  r: 15px;
  fill: var(--svg-color--626a6d, #626a6d);
}
</style><circle class="eli0ni9xn"/><circle class="x-eas4bra"/><circle class="b-6js2b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:radio-button"} {...others} />);
}

export default Component;
