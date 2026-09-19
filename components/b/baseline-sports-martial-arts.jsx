import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.su3kdjb3z {
  cx: 5px;
  cy: 5px;
  r: 2px;
  fill: currentColor;
}

.yvadjebwy {
  fill: currentColor;
  d: path("m19.8 2l-8.2 6.7l-1.21-1.04l3.6-2.08L9.41 1L8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17L8 16l-2.03-3.52l.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z");
}
</style><path class="yvadjebwy"/><circle class="su3kdjb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-sports-martial-arts"} {...others} />);
}

export default Component;
