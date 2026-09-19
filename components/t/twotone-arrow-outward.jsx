import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4dnnzrwg {
  fill: currentColor;
  d: path("M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z");
}
</style><path class="n4dnnzrwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-arrow-outward"} {...others} />);
}

export default Component;
