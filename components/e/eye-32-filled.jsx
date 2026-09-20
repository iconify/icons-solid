import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.xa5sjobcz {
  fill: currentColor;
  d: path("M28.034 17.29c.13.43.53.71.96.71v-.01a.993.993 0 0 0 .96-1.28C29.923 16.61 26.613 6 15.995 6S2.07 16.61 2.04 16.72c-.16.53.14 1.08.67 1.24s1.09-.14 1.25-.67C4.069 16.91 6.889 8 15.996 8c9.105 0 11.915 8.903 12.038 9.29M10 18a6 6 0 1 1 12 0a6 6 0 0 1-12 0");
}
</style><path class="xa5sjobcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:eye-32-filled"} {...others} />);
}

export default Component;
