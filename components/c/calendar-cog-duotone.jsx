import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f28yfvb1j {
  d: path("M19.6667 17C19.6667 18.4728 18.4728 19.6667 17 19.6667C15.5272 19.6667 14.3333 18.4728 14.3333 17C14.3333 15.5272 15.5272 14.3333 17 14.3333C18.4728 14.3333 19.6667 15.5272 19.6667 17ZM20.5417 17H21M19.5043 19.5043L19.8284 19.8284M17 20.5417V21M14.4957 19.5043L14.1716 19.8284M13.4583 17H13M14.4957 14.4957L14.1716 14.1716M17 13.4583V13M19.5043 14.4957L19.8284 14.1716");
}

.i6_2n17nm {
  stroke-opacity: 0.4;
  d: path("M10 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V10M7 11H11M8 3V7M16 3V7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i6_2n17nm"/><path class="f28yfvb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-cog-duotone"} {...others} />);
}

export default Component;
