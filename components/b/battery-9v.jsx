import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.adhyun7ou {
  d: path("m9.5 10.5l2.5 5l2.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3u9b-bpw {
  d: path("M6.5 6h11v15.5h-11Zm2.75-2.75V6m5.5-2.75V6");
}
</style><g class="ulnmmdpxh"><path class="y3u9b-bpw"/><path class="adhyun7ou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:battery-9v"} {...others} />);
}

export default Component;
