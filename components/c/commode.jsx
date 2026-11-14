import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-m7hbcac {
  d: path("M5 2.5h14v7H5Zm-.5 11a7.5 3.5 0 1 0 15 0a7.5 3.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yo1pbhbte {
  d: path("M8.25 13.5a3.75 1.25 0 1 0 7.5 0a3.75 1.25 0 1 0-7.5 0Zm-2.75 2l-1 6m14-6l1 6");
}
</style><g class="ulnmmdpxh"><path class="f-m7hbcac"/><path class="yo1pbhbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:commode"} {...others} />);
}

export default Component;
