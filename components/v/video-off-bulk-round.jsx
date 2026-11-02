import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k7w_bdb2t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21.218 17.976L8.243 5H11a5.01 5.01 0 0 1 4.77 3.497l.783-.391c1.12-.56 2.457-.597 3.583-.034c.534.267.996.658 1.328 1.154c.352.527.536 1.141.536 1.774v6a1 1 0 0 1-.782.976m-5.346-1.104A3.005 3.005 0 0 1 13 19H7a5 5 0 0 1-5-5V8c0-1.32.866-2.487 2.128-2.872Z");
}

.popaz21gp {
  d: path("M1.293 3.707a.999.999 0 1 1 1.414-1.414l19 19a.999.999 0 1 1-1.414 1.414Z");
}
</style><g class="cuyn6tgcc"><path class="k7w_bdb2t"/><path class="popaz21gp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:video-off-bulk-round"} {...others} />);
}

export default Component;
