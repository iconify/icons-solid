import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdm2dwocv {
  fill: currentColor;
  d: path("m6 22l-4-4l4-4l1.425 1.4l-1.6 1.6h12.35L16.6 15.4L18 14l4 4l-4 4l-1.425-1.4l1.6-1.6H5.825L7.4 20.6zm.9-9L11 2h2l4.1 11h-1.9l-.95-2.8H9.8l-1 2.8zm3.45-4.4h3.3l-1.6-4.55h-.1z");
}
</style><path class="rdm2dwocv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-letter-spacing-2"} {...others} />);
}

export default Component;
