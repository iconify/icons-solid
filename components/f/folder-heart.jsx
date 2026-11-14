import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nkzmxjzui {
  d: path("M12 16.25s-3.25-1.85-3.25-4c0-1.05.85-1.75 1.75-1.75c.7 0 1.2.4 1.5 1c.3-.6.8-1 1.5-1c.9 0 1.75.7 1.75 1.75c0 2.15-3.25 4-3.25 4Z");
}

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q3wixnhae"/><path class="nkzmxjzui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:folder-heart"} {...others} />);
}

export default Component;
