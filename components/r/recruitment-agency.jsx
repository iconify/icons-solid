import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe-qwxb9y {
  d: path("M13 21.5V8l4.25-4l4.25 4v13.5ZM15.75 11h.01m2.99 0h.01m-3.01 3.5h.01m2.99 0h.01");
}

.y3utgpbfc {
  d: path("M16 21.5v-3h2.5v3m-15-15a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 8c0-2 1.25-3.25 3-3.25s3 1.25 3 3.25Zm.5 5h7.25m-2-2l2 2l-2 2");
}
</style><g class="ulnmmdpxh"><path class="xe-qwxb9y"/><path class="y3utgpbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:recruitment-agency"} {...others} />);
}

export default Component;
