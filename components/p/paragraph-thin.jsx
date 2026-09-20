import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bv7m226wz {
  fill: currentColor;
  d: path("M208 44H96a60 60 0 0 0 0 120h44v44a4 4 0 0 0 8 0V52h32v156a4 4 0 0 0 8 0V52h20a4 4 0 0 0 0-8m-68 112H96a52 52 0 0 1 0-104h44Z");
}
</style><path class="bv7m226wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:paragraph-thin"} {...others} />);
}

export default Component;
