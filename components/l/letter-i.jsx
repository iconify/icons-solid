import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.rvyd5no5p {
  fill: var(--svg-color--fff, #fff);
  d: path("M35 46.5h-6v-29h6z");
}
</style><circle class="bgatx5byk"/><path class="rvyd5no5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-i"} {...others} />);
}

export default Component;
