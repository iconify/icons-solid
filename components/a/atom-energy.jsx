import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gvjzzc94z {
  d: path("M7.25 20.25a9.5 3.75 120 0 1 9.5-16.5a9.5 3.75 120 0 1-9.5 16.5ZM12 12h.01");
}

.h_die1bht {
  d: path("M2.5 12a9.5 3.75 0 1 0 19 0a9.5 3.75 0 1 0-19 0Z");
}

.ngpl-55lw {
  d: path("M16.75 20.25a9.5 3.75 60 0 1-9.5-16.5a9.5 3.75 60 0 1 9.5 16.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h_die1bht"/><path class="ngpl-55lw"/><path class="gvjzzc94z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atom-energy"} {...others} />);
}

export default Component;
