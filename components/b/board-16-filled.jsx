import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.u_sqknt2z {
  fill: currentColor;
  d: path("M7.5 2v3H2v-.5A2.5 2.5 0 0 1 4.5 2zm1 0v8H14V4.5A2.5 2.5 0 0 0 11.5 2zm5.5 9H8.5v3h3a2.5 2.5 0 0 0 2.5-2.5zm-6.5 3V6H2v5.5A2.5 2.5 0 0 0 4.5 14z");
}
</style><path class="u_sqknt2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:board-16-filled"} {...others} />);
}

export default Component;
