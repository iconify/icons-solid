import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.rsd8r_4bg {
  fill: var(--svg-color--fff, #fff);
  d: path("M38.4 17.5h6.3l-9.9 29h-5.7l-9.8-29h6.5l6.3 22z");
}
</style><circle class="bgatx5byk"/><path class="rsd8r_4bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-v"} {...others} />);
}

export default Component;
