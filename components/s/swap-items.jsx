import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.baiv3ne2o {
  d: path("m16.5 8l2 2l2-2M10 18.5H8.5a3 3 0 0 1-3-3V14");
}

.f8vpl2bor {
  d: path("m3.5 16l2-2l2 2");
}

.kxll9fbsc {
  d: path("M3.5 3.5h7v7h-7Zm10 10h7v7h-7Zm.5-8h1.5a3 3 0 0 1 3 3V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kxll9fbsc"/><path class="baiv3ne2o"/><path class="f8vpl2bor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:swap-items"} {...others} />);
}

export default Component;
