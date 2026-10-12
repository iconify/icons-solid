import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ardt3zb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.52 8.61l4.21-3.47l.77-.64l.77.64l4.21 3.47l.77.64H2.75zM5 12v5m3.5-5v5m3.5-5v5m-9 2.75h11M16.25 12h5m-2.5-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="ardt3zb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bank-transfer-sharp"} {...others} />);
}

export default Component;
