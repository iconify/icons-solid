import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ck4zdbrhc {
  d: path("M8.5 3L2.75 6l1.75 4.5L6 9.75V20.5h12V9.75l1.5.75L21.25 6L15.5 3a3.5 3.5 0 0 1-7 0Z");
}

.ni4_rbbkh {
  d: path("M13.112 11.196a3.25 3.25 0 0 1 1.942 1.942m0 2.224a3.25 3.25 0 0 1-1.942 1.942m-2.224 0a3.25 3.25 0 0 1-1.942-1.942m0-2.224a3.25 3.25 0 0 1 1.942-1.942M12 14.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ck4zdbrhc"/><path class="ni4_rbbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:custom-print-shirt"} {...others} />);
}

export default Component;
