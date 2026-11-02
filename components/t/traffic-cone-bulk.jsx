import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gho-q2b0f {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4.072 19.629l6-15A1 1 0 0 1 11 4h2c.409 0 .777.249.928.629l6 15A.998.998 0 0 1 19 21H5a1 1 0 0 1-.928-1.371");
}

.jlc8yivnf {
  d: path("M9 9h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-2 5h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m14 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="gho-q2b0f"/><path class="jlc8yivnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-cone-bulk"} {...others} />);
}

export default Component;
