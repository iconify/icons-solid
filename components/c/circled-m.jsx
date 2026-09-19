import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.rcpk3abwx {
  fill: var(--svg-color--fff, #fff);
  d: path("m41 15l-9 9l-9-9h-6v34h6V24l9 9l9-9v25h6V15z");
}
</style><circle class="bgatx5byk"/><path class="rcpk3abwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:circled-m"} {...others} />);
}

export default Component;
