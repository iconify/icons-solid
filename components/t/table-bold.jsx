import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pv9a0tbfu {
  fill: currentColor;
  d: path("M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12M44 116h32v24H44Zm56 0h112v24H100Zm112-48v24H44V68ZM44 164h32v24H44Zm56 24v-24h112v24Z");
}
</style><path class="pv9a0tbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:table-bold"} {...others} />);
}

export default Component;
