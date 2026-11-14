import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7yj_-bhz {
  fill: currentColor;
  d: path("M15.5 15.5H21V21h-5.5Z");
}

.qq9ttib9q {
  d: path("M12.716 21H2.5l6-12V2.5H13V9l1.834 3.667M6.5 13h6.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qq9ttib9q"/><path class="f7yj_-bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:experiment-stop"} {...others} />);
}

export default Component;
