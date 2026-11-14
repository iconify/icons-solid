import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0sua3x1g {
  d: path("M10.75 21.5v-4h2.5v4m-8-6.5h.01M12 10h.01m6.74 3h.01");
}

.r02fzqbhp {
  d: path("M2.5 21.5V11H8V5h2V3h4v2h2v3h5.5v13.5ZM8 11v10.5M16 8v13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r02fzqbhp"/><path class="c0sua3x1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:business-park"} {...others} />);
}

export default Component;
