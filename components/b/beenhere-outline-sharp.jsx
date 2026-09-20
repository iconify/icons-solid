import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xqr3ngbsa {
  fill: currentColor;
  d: path("m12 23l-8-6V2h16v15zm0-2.5l6-4.5V4H6v12zM10.95 15l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.1-2.1l-1.45 1.4zM12 4H6h12z");
}
</style><path class="xqr3ngbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:beenhere-outline-sharp"} {...others} />);
}

export default Component;
