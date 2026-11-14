import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igrn4bcou {
  d: path("M7.5 5a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwfaeeh7j {
  d: path("M7.5 5v14.5a4.5 1.75 0 0 0 9 0V5m-9 4.5c-3.75 0-3.75 5 0 5m9-5c3.75 0 3.75 5 0 5");
}
</style><g class="ulnmmdpxh"><path class="igrn4bcou"/><path class="wwfaeeh7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:training-dummy"} {...others} />);
}

export default Component;
