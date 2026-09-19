import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.wj0hwsbop {
  fill: var(--svg-color--fff, #fff);
  d: path("M38 23H26c-1 0-2 1-2 2l-1 11h3l1-9l1 24h3l1-13l1 13h3l1-24l1 9h3l-1-11c0-1-1-2-2-2m-2-4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2z");
}
</style><circle class="bgatx5byk"/><path class="wj0hwsbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:mens-room"} {...others} />);
}

export default Component;
