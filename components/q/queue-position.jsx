import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ef1k80gsz {
  d: path("M9 17.5h12v3H9Zm-6-8L5.5 12L3 14.5");
}

.f6_kdhrvp {
  fill: currentColor;
  d: path("M9 10.5h12v3H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2ot_ibqo {
  d: path("M9 3.5h12v3H9Z");
}
</style><g class="ulnmmdpxh"><path class="w2ot_ibqo"/><path class="f6_kdhrvp"/><path class="ef1k80gsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:queue-position"} {...others} />);
}

export default Component;
