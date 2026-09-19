import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x9dmvpbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.263 17.871v12.48L20.212 43.5L9.737 37.26L27.12 24.111L9.737 10.74L20.211 4.5zl-11.143 6.24l11.143 6.24");
}
</style><path class="x9dmvpbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:measure"} {...others} />);
}

export default Component;
