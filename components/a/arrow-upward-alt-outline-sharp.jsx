import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5evbibky {
  fill: currentColor;
  d: path("M11 18V8.8l-3.6 3.6L6 11l6-6l6 6l-1.4 1.4L13 8.8V18z");
}
</style><path class="q5evbibky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-upward-alt-outline-sharp"} {...others} />);
}

export default Component;
