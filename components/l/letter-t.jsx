import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.ev1q9olqn {
  fill: var(--svg-color--fff, #fff);
  d: path("M43.8 17.5v5.1h-8.7v23.9H29V22.6h-8.7v-5.1z");
}
</style><circle class="bgatx5byk"/><path class="ev1q9olqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-t"} {...others} />);
}

export default Component;
