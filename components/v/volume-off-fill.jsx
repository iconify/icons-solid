import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oeqw38bco {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414L15 16.414V18c0 .898-.572 1.928-1.521 2.089a1.34 1.34 0 0 1-1.186-.382l-2-2C9.98 17.395 9.468 17 9 17H8a3 3 0 0 1-3-3v-4c0-.942.439-1.827 1.191-2.394L1.293 2.707a.999.999 0 1 1 1.414-1.414m7.707 4.879l1.879-1.879c.31-.311.752-.456 1.186-.382C14.428 4.072 15 5.102 15 6v4.757Z");
}
</style><path class="oeqw38bco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-off-fill"} {...others} />);
}

export default Component;
