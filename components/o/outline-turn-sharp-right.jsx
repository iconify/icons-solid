import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wepzylo9q {
  fill: currentColor;
  d: path("m18 6.83l1.59 1.59L21 7l-4-4l-4 4l1.41 1.41L16 6.83V13H8c-1.1 0-2 .9-2 2v6h2v-6h8c1.1 0 2-.9 2-2z");
}
</style><path class="wepzylo9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-turn-sharp-right"} {...others} />);
}

export default Component;
