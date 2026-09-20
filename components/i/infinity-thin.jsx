import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z8-j8ujkk {
  fill: currentColor;
  d: path("M244 128a52 52 0 0 1-88.77 36.77l-.17-.18L95 96.8a44 44 0 1 0 0 62.4l8.6-9.72a4 4 0 0 1 6 5.3l-8.68 9.81l-.17.18a52 52 0 1 1 0-73.54l.17.18l60 67.79a44 44 0 1 0 0-62.4l-8.6 9.72a4 4 0 0 1-6-5.3l8.68-9.81l.17-.18A52 52 0 0 1 244 128");
}
</style><path class="z8-j8ujkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:infinity-thin"} {...others} />);
}

export default Component;
