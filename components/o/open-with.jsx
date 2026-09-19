import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rawqa4bii {
  fill: currentColor;
  d: path("M10 9h4V6h3l-5-5l-5 5h3zm-1 1H6V7l-5 5l5 5v-3h3zm14 2l-5-5v3h-3v4h3v3zm-9 3h-4v3H7l5 5l5-5h-3z");
}
</style><path class="rawqa4bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:open-with"} {...others} />);
}

export default Component;
