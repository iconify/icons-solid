import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gkkb86bin {
  fill: currentColor;
  d: path("M5.5 22v-7.5H4V7h7v7.5H9.5V22zM18 22v-6h3l-3-9h-3l-3 9h3v6zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2");
}
</style><path class="gkkb86bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-wc"} {...others} />);
}

export default Component;
