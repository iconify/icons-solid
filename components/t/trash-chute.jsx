import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gd2-xmvhk {
  d: path("M5.5 4h13v9h-13Z");
}

.m3sf1bbag {
  d: path("M5.5 13h13L20 7H4ZM10 9.75h4m-2 5.75V21m-2.5-2.5L12 21l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gd2-xmvhk"/><path class="m3sf1bbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:trash-chute"} {...others} />);
}

export default Component;
