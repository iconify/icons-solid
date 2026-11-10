import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.llbrnfavy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 1C10.552 1 11 1.448 11 2V18C11 18.552 10.552 19 10 19H4C3.448 19 3 18.552 3 18V2C3 1.448 3.448 1 4 1H10ZM20 9C20.552 9 21 9.448 21 10V18C21 18.552 20.552 19 20 19H14C13.448 19 13 18.552 13 18V10C13 9.448 13.448 9 14 9H20Z");
}

.ytmodtkaz {
  d: path("M23 21V23H1V21H23Z");
}
</style><g class="cuyn6tgcc"><path class="llbrnfavy"/><path class="ytmodtkaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-end-horizontal-sharp-duotone"} {...others} />);
}

export default Component;
