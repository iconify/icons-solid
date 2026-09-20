import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.lt5nb3u-b {
  fill: currentColor;
  d: path("M13.454 6.526a3.25 3.25 0 0 0 0 4.597l7.426 7.424a3.25 3.25 0 0 0 4.596 0l.036-.037a8.5 8.5 0 0 0 .666-11.272l3.53-3.53a1 1 0 0 0-1.415-1.414l-3.53 3.53a8.5 8.5 0 0 0-11.272.666zm5.095 14.351a3.25 3.25 0 0 1 0 4.596l-.036.037a8.5 8.5 0 0 1-11.273.666l-3.529 3.53a1 1 0 0 1-1.414-1.415l3.53-3.53a8.5 8.5 0 0 1 .665-11.272l.036-.036a3.25 3.25 0 0 1 4.596 0z");
}
</style><path class="lt5nb3u-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:plug-connected-32-filled"} {...others} />);
}

export default Component;
