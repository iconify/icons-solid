import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dvmd9obdn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 8C17.552 8 18 8.448 18 9V15C18 15.552 17.552 16 17 16H7C6.448 16 6 15.552 6 15V9C6 8.448 6.448 8 7 8H17Z");
}

.r1zmqzbiv {
  d: path("M23 19V21H1V19H23ZM23 3V5H1V3H23Z");
}
</style><g class="cuyn6tgcc"><path class="dvmd9obdn"/><path class="r1zmqzbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-vertical-space-around-sharp-duotone"} {...others} />);
}

export default Component;
