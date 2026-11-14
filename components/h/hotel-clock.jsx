import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.airzgeb4e {
  d: path("M4.5 21.5v-17A1.5 1.5 0 0 1 6 3h12a1.5 1.5 0 0 1 1.5 1.5v17m-17 0h19");
}

.k3wriih5w {
  d: path("M12 7.75V10h2M9.75 21.5V17h4.5v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vso4lpfqq {
  d: path("M8 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="airzgeb4e"/><path class="vso4lpfqq"/><path class="k3wriih5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hotel-clock"} {...others} />);
}

export default Component;
