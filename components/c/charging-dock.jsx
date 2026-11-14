import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oawdqdxvc {
  d: path("M7 2.5h10v16.25H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1nsp4bov {
  d: path("m12.75 6.25l-3 4.5H12l-.75 4l3-4.75H12Z");
}

.y4btll8su {
  d: path("M2.5 15.5v4a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-4");
}
</style><g class="ulnmmdpxh"><path class="y4btll8su"/><path class="oawdqdxvc"/><path class="v1nsp4bov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:charging-dock"} {...others} />);
}

export default Component;
