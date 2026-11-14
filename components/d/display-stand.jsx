import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f262agw-y {
  d: path("M7.25 5.25L12 2.75l4.75 2.5v4.5L12 12.25l-4.75-2.5ZM3.5 12.5h17l-2 2.5h-13ZM12 15v5.5m-4.5 0h9");
}

.f31yr29wf {
  d: path("M7.25 5.25L12 7.75l4.75-2.5M12 7.75v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f262agw-y"/><path class="f31yr29wf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:display-stand"} {...others} />);
}

export default Component;
