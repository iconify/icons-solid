import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.jfrttcclg {
  fill: var(--svg-color--fff, #fff);
  d: path("m14 18l11.9 12.7H14L32 50l18-19.3H38.1L50 18z");
}
</style><circle class="bgatx5byk"/><path class="jfrttcclg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:fast-down-button"} {...others} />);
}

export default Component;
