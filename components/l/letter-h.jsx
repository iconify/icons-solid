import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.v5onwncao {
  fill: var(--svg-color--fff, #fff);
  d: path("M20.3 46.5v-29h6v11.1h11.3V17.5h6v29h-6v-13H26.4v13z");
}
</style><circle class="bgatx5byk"/><path class="v5onwncao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-h"} {...others} />);
}

export default Component;
