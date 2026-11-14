import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a82ngpu0j {
  d: path("M9 18.75L13.75 12a2.5 2.5 0 1 0-3.5 0L15 18.75");
}

.cu-7bb6je {
  d: path("M2.5 21.5V10h4V4.5h11V10h4v11.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cu-7bb6je"/><path class="a82ngpu0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cancer-centre"} {...others} />);
}

export default Component;
