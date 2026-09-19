import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.cuyyezbxs {
  d: path("M37 42.4H27L23 2h18z");
}

.l_kccubev {
  fill: var(--svg-color--a6aeb0, #a6aeb0);
}

.o-hj8qbbo {
  cx: 32px;
  cy: 54.4px;
  rx: 7.7px;
  ry: 7.6px;
}
</style><g class="l_kccubev"><path class="cuyyezbxs"/><ellipse class="o-hj8qbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:white-exclamation-mark"} {...others} />);
}

export default Component;
