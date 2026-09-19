import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.cxs_4_h0e {
  fill: var(--svg-color--fff, #fff);
  d: path("M28.6 17.5h6.9l10.3 29h-6.6l-1.9-6H26.6l-2 6h-6.3zm-.4 18h7.4L32 24.1z");
}
</style><circle class="bgatx5byk"/><path class="cxs_4_h0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-a"} {...others} />);
}

export default Component;
