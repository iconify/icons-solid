import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.b-qwdpb8m {
  fill: var(--svg-color--fff, #fff);
  d: path("m13 16l19 16l-19 16zm22.8 0h5.7v32h-5.7zm9.5 0H51v32h-5.7z");
}

.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}
</style><circle class="bgatx5byk"/><path class="b-qwdpb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:play-or-pause-button"} {...others} />);
}

export default Component;
