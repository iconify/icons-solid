import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nosfyyblj {
  d: path("m12 7l1.616 3.775l4.09.371l-3.091 2.704l.912 4.004L12 15.75l-3.527 2.104l.912-4.004l-3.091-2.704l4.09-.371Z");
}

.qw8tp0w0n {
  d: path("M2.5 20.5a1 1 0 0 0 1-1V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v12.5a1 1 0 0 0 1 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qw8tp0w0n"/><path class="nosfyyblj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:favicon"} {...others} />);
}

export default Component;
