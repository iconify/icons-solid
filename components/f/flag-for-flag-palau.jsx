import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ao1eh_btz {
  cx: 24px;
  cy: 32px;
  r: 16px;
  fill: var(--svg-color--ffe62e, #ffe62e);
}

.u-85q7evm {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--42ade2, #42ade2);
}
</style><circle class="u-85q7evm"/><circle class="ao1eh_btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:flag-for-flag-palau"} {...others} />);
}

export default Component;
