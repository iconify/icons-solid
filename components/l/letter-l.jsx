import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.l7_u9bb3w {
  fill: var(--svg-color--fff, #fff);
  d: path("M22.7 17.5h6.1v23.8h14.5v5.2H22.7z");
}
</style><circle class="bgatx5byk"/><path class="l7_u9bb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-l"} {...others} />);
}

export default Component;
