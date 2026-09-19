import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.xi2fzfb3w {
  fill: var(--svg-color--fff, #fff);
  d: path("M33.7 16L49 32L33.7 48V37.4H15V27.1h18.7z");
}
</style><circle class="bgatx5byk"/><path class="xi2fzfb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:right-arrow"} {...others} />);
}

export default Component;
