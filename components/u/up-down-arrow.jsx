import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.aep4z1bdd {
  fill: var(--svg-color--fff, #fff);
  d: path("m32 52l16-15.5H36.6v-9H48L32 12L16 27.5h11.4v9H16z");
}

.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}
</style><circle class="bgatx5byk"/><path class="aep4z1bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:up-down-arrow"} {...others} />);
}

export default Component;
