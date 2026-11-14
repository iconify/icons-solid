import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gll5j9beh {
  d: path("M3.25 11a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 1 0-17.5 0ZM12 19.75V22");
}

.ku45wbb3o {
  d: path("M8.5 5.5h7v3h-7Zm.5 6v4m3-4v4m3-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gll5j9beh"/><path class="ku45wbb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:three-phase-meter"} {...others} />);
}

export default Component;
