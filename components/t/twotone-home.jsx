import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cot-_itns {
  fill: currentColor;
  d: path("M12 3L2 12h3v8h6v-6h2v6h6v-8h3zm5 15h-2v-6H9v6H7v-7.81l5-4.5l5 4.5z");
}

.z6lvnjcgg {
  fill: currentColor;
  d: path("M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="cot-_itns"/><path class="z6lvnjcgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-home"} {...others} />);
}

export default Component;
