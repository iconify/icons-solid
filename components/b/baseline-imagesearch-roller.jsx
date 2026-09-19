import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5a5oubgj {
  fill: currentColor;
  d: path("M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2");
}
</style><path class="d5a5oubgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-imagesearch-roller"} {...others} />);
}

export default Component;
