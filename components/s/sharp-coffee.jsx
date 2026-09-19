import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bph9qp__d {
  fill: currentColor;
  d: path("M18.5 3H4v8c0 3.87 3.13 7 7 7s7-3.13 7-7v-1h.4c1.67 0 3.19-1.13 3.52-2.77A3.494 3.494 0 0 0 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z");
}
</style><path class="bph9qp__d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-coffee"} {...others} />);
}

export default Component;
