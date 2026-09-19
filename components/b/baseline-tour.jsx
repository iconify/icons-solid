import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fouui64mx {
  fill: currentColor;
  d: path("M21 4H7V2H5v20h2v-8h14l-2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2");
}
</style><path class="fouui64mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-tour"} {...others} />);
}

export default Component;
