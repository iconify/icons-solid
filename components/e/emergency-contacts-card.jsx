import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdr17ac-k {
  d: path("M5.75 7.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM5 14c0-1.25 1-2 2.5-2s2.5.75 2.5 2m3.5-5.5H17M15.5 14H17l.75 2.25l-1 1a6 6 0 0 0 1.5 1.5l1-1l2.25.75V20a1.5 1.5 0 0 1-1.5 1.5a6.5 6.5 0 0 1-6-6a1.5 1.5 0 0 1 1.5-1.5Z");
}

.e89w9kk3k {
  d: path("M11.3 16.5H2.5v-13h18v11.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e89w9kk3k"/><path class="cdr17ac-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:emergency-contacts-card"} {...others} />);
}

export default Component;
