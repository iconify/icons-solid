import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.cuyyezbxs {
  d: path("M37 42.4H27L23 2h18z");
}

.ic-371bqb {
  fill: var(--svg-color--ff5a79, #ff5a79);
}

.o-hj8qbbo {
  cx: 32px;
  cy: 54.4px;
  rx: 7.7px;
  ry: 7.6px;
}
</style><g class="ic-371bqb"><path class="cuyyezbxs"/><ellipse class="o-hj8qbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:exclamation-mark"} {...others} />);
}

export default Component;
