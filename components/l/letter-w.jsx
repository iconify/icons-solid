import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.ht69pubzq {
  fill: var(--svg-color--fff, #fff);
  d: path("m20 17.5l3.8 16.6l.8 4.6l.8-4.5l3.3-16.7h6.4l3.4 16.6l.9 4.6l.9-4.4l3.9-16.8h6.2l-8.2 29h-5.8l-3.5-17l-1-5.6l-1 5.6l-3.5 17h-5.6l-8.2-29z");
}
</style><circle class="bgatx5byk"/><path class="ht69pubzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-w"} {...others} />);
}

export default Component;
