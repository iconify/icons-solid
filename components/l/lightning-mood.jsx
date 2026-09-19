import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.wlk5en25j {
  fill: var(--svg-color--fbb11c, #fbb11c);
  d: path("M43.4.159L12.06 28.492l24.31 7.538L18.12 64l35.26-33.426l-18.978-8.464z");
}
</style><path class="wlk5en25j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:lightning-mood"} {...others} />);
}

export default Component;
