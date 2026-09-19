import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.ez8ijy23w {
  fill: var(--svg-color--fff, #fff);
  d: path("m12 32l15.5 16V36.6h9V48L52 32L36.5 16v11.4h-9V16z");
}
</style><circle class="bgatx5byk"/><path class="ez8ijy23w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:left-right-arrow"} {...others} />);
}

export default Component;
