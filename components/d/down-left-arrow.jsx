import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.negmfpbdb {
  fill: var(--svg-color--fff, #fff);
  d: path("M42.1 44.5L20 44l-.5-22.1l7.5 7.5l13.2-13.3l7.3 7.3l-13.3 13.2z");
}
</style><circle class="bgatx5byk"/><path class="negmfpbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:down-left-arrow"} {...others} />);
}

export default Component;
