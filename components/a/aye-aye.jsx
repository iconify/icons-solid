import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l4xrjbc6o {
  d: path("M7.5 14a4.5 5.5 0 1 0 9 0a4.5 5.5 0 1 0-9 0ZM2.25 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm13.5 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-5.75 8h.01m3.99 0h.01");
}

.loe9cmdpg {
  d: path("M15.75 17L19 18.5l2.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4xrjbc6o"/><path class="loe9cmdpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aye-aye"} {...others} />);
}

export default Component;
