import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rvy1sbcos {
  d: path("M12.164 20H4V2.5h9.5L18 7v4.936");
}

.su9clsbyh {
  d: path("M7 7.5h6.5V14H7Zm8 10h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rvy1sbcos"/><path class="su9clsbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carrier-unlock"} {...others} />);
}

export default Component;
