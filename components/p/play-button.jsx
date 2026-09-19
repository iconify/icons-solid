import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.wl5p9fbiw {
  fill: var(--svg-color--fff, #fff);
  d: path("m25 12l20 20l-20 20z");
}
</style><circle class="bgatx5byk"/><path class="wl5p9fbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:play-button"} {...others} />);
}

export default Component;
