import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahit3lbtd {
  fill: currentColor;
  d: path("M8.75 11a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM13 14a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-4 3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xekh4beng {
  d: path("m8.5 2.5l3.5 2l3.5-2l5.5 4l-2.5 4l-1.5-1l.5 12h-11l.5-12l-1.5 1l-2.5-4Z");
}
</style><g class="ulnmmdpxh"><path class="xekh4beng"/><path class="ahit3lbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hospital-gown"} {...others} />);
}

export default Component;
