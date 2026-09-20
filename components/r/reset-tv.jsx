import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7ctlirfn {
  fill: currentColor;
  d: path("M9 20v-2H4.616q-.667 0-1.141-.475T3 16.386V5.615q0-.666.475-1.14T4.615 4h14.77q.666 0 1.14.475T21 5.615V10.5h-9.392l2.35-2.35l-.708-.708L9.692 11l3.558 3.558l.708-.708l-2.35-2.35H21v4.885q0 .666-.475 1.14t-1.14.475H15v2z");
}
</style><path class="l7ctlirfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:reset-tv"} {...others} />);
}

export default Component;
