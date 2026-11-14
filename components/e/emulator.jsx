import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9oj0xj6k {
  d: path("M12.2 15H2.5V3h17v5.2M11 15v4m-4 0h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjzi9_byq {
  d: path("m5.5 6l2 2l-2 2m4 0H12m3 1h6.5v11H15Z");
}
</style><g class="ulnmmdpxh"><path class="j9oj0xj6k"/><path class="vjzi9_byq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:emulator"} {...others} />);
}

export default Component;
