import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjn247bxw {
  d: path("M12.76 20.5H4v-10l8-7l8 7v1.54");
}

.flc_k6b4r {
  d: path("m15.5 14.5l.25 1.5l1.5.25");
}

.hafqmc1ni {
  d: path("M16 7V4h2v4.75m2.121 7.129a3 3 0 1 1-4.242 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cjn247bxw"/><path class="hafqmc1ni"/><path class="flc_k6b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mortgage-heloc"} {...others} />);
}

export default Component;
