import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0mfv_m6z {
  fill: currentColor;
  d: path("m6.72 8.715l4.494-4.495a.75.75 0 0 1 .976-.073l.085.072l4.504 4.495a.75.75 0 0 1-.975 1.134l-.084-.072l-3.223-3.217v12.696a.75.75 0 0 1-.648.743l-.101.007a.75.75 0 0 1-.743-.648l-.007-.102l-.001-12.698L7.78 9.775a.75.75 0 0 1-.976.073l-.084-.073a.75.75 0 0 1-.073-.976zl4.494-4.495z");
}
</style><path class="m0mfv_m6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-sort-up-24-regular"} {...others} />);
}

export default Component;
