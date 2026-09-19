import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.kp2nsvpkr {
  fill: var(--svg-color--fff, #fff);
  d: path("m16 33.6l16-19l16 19zm0 4h32v5.7H16z");
}
</style><circle class="bgatx5byk"/><path class="kp2nsvpkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:eject-button"} {...others} />);
}

export default Component;
