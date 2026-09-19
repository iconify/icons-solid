import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.hrblobcht {
  fill: var(--svg-color--fff, #fff);
  d: path("M21.7 17.5h20.7v5.1H27.7v6.7h12.9v5H27.7v12.2h-6z");
}
</style><circle class="bgatx5byk"/><path class="hrblobcht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-f"} {...others} />);
}

export default Component;
