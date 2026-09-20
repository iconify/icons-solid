import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4a20ccxb {
  fill: currentColor;
  d: path("M4.616 17.5q-.667 0-1.141-.475T3 15.886V4.615q0-.666.475-1.14T4.615 3h14.77q.666 0 1.14.475T21 4.615v11.27q0 .666-.475 1.14t-1.14.475H14.29l-1.62 2.462q-.13.186-.295.28t-.376.093t-.376-.094t-.295-.28L9.709 17.5z");
}
</style><path class="y4a20ccxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tooltip-rounded"} {...others} />);
}

export default Component;
