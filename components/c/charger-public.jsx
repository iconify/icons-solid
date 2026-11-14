import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-sj7tg9e {
  d: path("M4 2.5h10v19H4ZM14 8h2a2.5 2.5 0 0 1 2.5 2.5V15m-2 0h4v3.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uoizt6q2s {
  d: path("M7 5.5h4v4H7Z");
}
</style><g class="ulnmmdpxh"><path class="o-sj7tg9e"/><path class="uoizt6q2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:charger-public"} {...others} />);
}

export default Component;
