import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3c9v8ngc {
  d: path("M16 14h4.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-2.75l-2.75 2V15a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xcixd7bvq {
  d: path("M12.2 21.5H3.5v-19H17v8.7M7 7h6.5M7 11h6.5M7 15h3.5");
}
</style><g class="ulnmmdpxh"><path class="xcixd7bvq"/><path class="g3c9v8ngc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:call-transcript"} {...others} />);
}

export default Component;
