import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xem9l2b9x {
  fill: currentColor;
  d: path("M10.375 15v-4.5h-2.25V9h6v1.5h-2.25V15zM2 15v-5q0-.425.288-.712T3 9h3q.425 0 .713.288T7 10v5H5.5v-1.5h-2V15zm1.5-3h2v-1.5h-2zm12 3v-5q0-.425.288-.712T16.5 9H21q.425 0 .713.288T22 10v5h-1.5v-4.5h-1V14H18v-3.5h-1V15z");
}
</style><path class="xem9l2b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:atm"} {...others} />);
}

export default Component;
