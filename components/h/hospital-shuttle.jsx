import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cylvmyblm {
  d: path("M16.5 5v6h4.75M6.5 8v5.5M11 8v5.5m-4.5-2.75H11M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ergsilb2i {
  d: path("M2.5 15.9V7c0-1.1.9-2 2-2h12c1.5 0 2.5.75 3 2l2 4.5V15c0 .402-.12.777-.326 1.091M12.443 17h-1.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ergsilb2i"/><path class="cylvmyblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hospital-shuttle"} {...others} />);
}

export default Component;
