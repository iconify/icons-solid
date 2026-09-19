import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5j_qdwkr {
  fill: currentColor;
  d: path("M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z");
}

.n9k19jblp {
  fill: currentColor;
  d: path("M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10l-2.5-1.5L15 12V4h5z");
}
</style><path class="f5j_qdwkr"/><path class="n9k19jblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:collections-bookmark"} {...others} />);
}

export default Component;
