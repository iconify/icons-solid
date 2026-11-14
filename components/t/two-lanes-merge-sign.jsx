import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pwagb3kcm {
  d: path("m10 9.5l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3o8-b_d {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Z");
}

.zghbd-bez {
  d: path("M10 15.5v-1l2-2v-5m2 8v-1l-2-2");
}
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="zghbd-bez"/><path class="pwagb3kcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:two-lanes-merge-sign"} {...others} />);
}

export default Component;
