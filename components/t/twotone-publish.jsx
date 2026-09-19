import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aya9hf04n {
  fill: currentColor;
  d: path("M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4zm1 5v6h-2v-6H9.83L12 9.83L14.17 12z");
}

.wojnxfy3j {
  fill: currentColor;
  d: path("M9.83 12H11v6h2v-6h1.17L12 9.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wojnxfy3j"/><path class="aya9hf04n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-publish"} {...others} />);
}

export default Component;
