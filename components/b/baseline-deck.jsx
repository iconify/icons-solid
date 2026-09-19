import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0ac6lg4f {
  fill: currentColor;
  d: path("M22 9L12 2L2 9h9v13h2V9z");
}

.z6k6deb5g {
  fill: currentColor;
  d: path("m4.14 12l-1.96.37l.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37l-1.96-.37z");
}
</style><path class="n0ac6lg4f"/><path class="z6k6deb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-deck"} {...others} />);
}

export default Component;
