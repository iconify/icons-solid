import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.an9wpmbeb {
  d: path("M14.072 15.5H2.5v-4L6 10l2.5-4.5h7L19 10l.38.228m.6.36l1.52.912v.528");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywekxpbrt {
  d: path("M4.75 15.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm11.469-2.111q-.218.08-.414.203q-.197.123-.364.284t-.298.352t-.22.405M14.5 21.5V19l5-5l2.5 2.5l-5 5Z");
}
</style><g class="ulnmmdpxh"><path class="an9wpmbeb"/><path class="ywekxpbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:car-edit"} {...others} />);
}

export default Component;
