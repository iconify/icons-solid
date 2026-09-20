import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.krkyq-buc {
  fill: currentColor;
  d: path("M243.09 35.41A12 12 0 0 0 232 28H24a12 12 0 0 0-8.48 20.49L116 149v55H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-55L240.48 48.49a12 12 0 0 0 2.61-13.08M203 52l-12 12H65L53 52Zm-75 75L89 88h78Z");
}
</style><path class="krkyq-buc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:martini-bold"} {...others} />);
}

export default Component;
