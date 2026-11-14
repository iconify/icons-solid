import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ojt0hsz7q {
  d: path("M12.1 18H2.5V6h18v6.2M5.5 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yahn0hbwd {
  d: path("M7.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="ojt0hsz7q"/><path class="yahn0hbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:issue-photo-upload"} {...others} />);
}

export default Component;
