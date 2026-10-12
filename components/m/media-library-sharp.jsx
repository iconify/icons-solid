import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aho8uyzng {
  d: path("M4.25 3.75v16.5m4-16.5v16.5m3-13h10v13h-10z");
}

.dokn69jlv {
  d: path("m15.33 11.64l2.59 1.72l.58.39l-.58.39l-2.59 1.72l-.58.39v-5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aho8uyzng"/><path class="dokn69jlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:media-library-sharp"} {...others} />);
}

export default Component;
