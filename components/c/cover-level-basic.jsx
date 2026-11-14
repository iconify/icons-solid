import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aw0w7y5bs {
  d: path("M10.25 9h3.5v12h-3.5Zm6.25-6H20v18h-3.5Z");
}

.lk76xc74f {
  fill: currentColor;
  d: path("M4 15h3.5v6H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lk76xc74f"/><path class="aw0w7y5bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cover-level-basic"} {...others} />);
}

export default Component;
