import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.eeyjehoml {
  fill: currentColor;
  d: path("M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v12.5A3.75 3.75 0 0 1 22.25 24H5.755a3.75 3.75 0 0 1-3.75-3.75zM6.5 7A1.5 1.5 0 0 0 5 8.5v4A1.5 1.5 0 0 0 6.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 11.5 7zM21 10.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0m-7 5v.25A4.25 4.25 0 0 0 18.25 20h.5A4.25 4.25 0 0 0 23 15.75v-.25a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5");
}
</style><path class="eeyjehoml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:share-screen-person-overlay-inside-28-filled"} {...others} />);
}

export default Component;
