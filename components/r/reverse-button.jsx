import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.ee3sz8y1c {
  fill: var(--svg-color--fff, #fff);
  d: path("M38 12L18 32l20 20z");
}
</style><circle class="bgatx5byk"/><path class="ee3sz8y1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:reverse-button"} {...others} />);
}

export default Component;
