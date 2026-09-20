import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u10-tf8ne {
  fill: currentColor;
  d: path("m7.046 18.354l-1.4-1.4q-.165-.165-.165-.366t.165-.367L16.221 5.646q.166-.165.367-.165t.366.165l1.4 1.4q.165.166.165.367t-.165.366l-10.6 10.575q-.14.14-.354.14t-.354-.14");
}
</style><path class="u10-tf8ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:highlighter-size-1-rounded"} {...others} />);
}

export default Component;
