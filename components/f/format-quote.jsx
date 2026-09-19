import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u82-tjbvp {
  fill: currentColor;
  d: path("M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z");
}
</style><path class="u82-tjbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:format-quote"} {...others} />);
}

export default Component;
