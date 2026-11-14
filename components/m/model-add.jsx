import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pkeva3bti {
  d: path("M12.164 19.882L11 20.5l-8-4.25v-9.5l8-4.25l8 4.25v5.441");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yimmmv_ip {
  d: path("M3 6.75L11 11l8-4.25M11 11v9.5m7-5.5v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="pkeva3bti"/><path class="yimmmv_ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:model-add"} {...others} />);
}

export default Component;
