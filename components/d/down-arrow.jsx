import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ad7e00btn {
  fill: var(--svg-color--fff, #fff);
  d: path("M16 33.7L32 49l16-15.3H37.4V15H27.1v18.7z");
}

.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}
</style><circle class="bgatx5byk"/><path class="ad7e00btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:down-arrow"} {...others} />);
}

export default Component;
