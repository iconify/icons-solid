import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eel29bcos {
  fill: currentColor;
  d: path("M13 4H6v16h12V9h-5zm3 14H8v-2h8zm0-6v2H8v-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ks64glbdq {
  fill: currentColor;
  d: path("M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z");
}
</style><path class="eel29bcos"/><path class="ks64glbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-description"} {...others} />);
}

export default Component;
