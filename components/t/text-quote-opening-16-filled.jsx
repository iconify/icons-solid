import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.nk6jui3uu {
  fill: currentColor;
  d: path("M6.354 4.854c-1.387 1.386-2.009 2.76-2.24 4.352A2 2 0 1 1 3 11c.001-2.592.528-4.734 2.647-6.854a.5.5 0 1 1 .708.708m6 0c-1.387 1.386-2.008 2.76-2.24 4.352A2 2 0 1 1 9 11c.001-2.592.528-4.734 2.647-6.854a.5.5 0 0 1 .708.708");
}
</style><path class="nk6jui3uu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-quote-opening-16-filled"} {...others} />);
}

export default Component;
