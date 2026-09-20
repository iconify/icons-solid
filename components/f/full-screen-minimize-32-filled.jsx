import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.vzf_j3but {
  fill: currentColor;
  d: path("M10.25 2.5c.69 0 1.25.56 1.25 1.25V8A3.5 3.5 0 0 1 8 11.5H3.75a1.25 1.25 0 1 1 0-2.5H8a1 1 0 0 0 1-1V3.75c0-.69.56-1.25 1.25-1.25m11.5 0c.69 0 1.25.56 1.25 1.25V8a1 1 0 0 0 1 1h4.25a1.25 1.25 0 1 1 0 2.5H24A3.5 3.5 0 0 1 20.5 8V3.75c0-.69.56-1.25 1.25-1.25M2.5 21.75c0-.69.56-1.25 1.25-1.25H8a3.5 3.5 0 0 1 3.5 3.5v4.25a1.25 1.25 0 1 1-2.5 0V24a1 1 0 0 0-1-1H3.75c-.69 0-1.25-.56-1.25-1.25m18 2.25a3.5 3.5 0 0 1 3.5-3.5h4.25a1.25 1.25 0 1 1 0 2.5H24a1 1 0 0 0-1 1v4.25a1.25 1.25 0 1 1-2.5 0z");
}
</style><path class="vzf_j3but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:full-screen-minimize-32-filled"} {...others} />);
}

export default Component;
