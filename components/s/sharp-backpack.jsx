import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ltbcy9b0z {
  fill: currentColor;
  d: path("M20 8v14H4V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86M6 12v2h10v2h2v-4z");
}
</style><path class="ltbcy9b0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-backpack"} {...others} />);
}

export default Component;
