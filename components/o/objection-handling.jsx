import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywlkpyzgy {
  d: path("M9.75 3.25a2.5 2.5 0 0 1 1.75-.75H19A2.5 2.5 0 0 1 21.5 5v6a2.5 2.5 0 0 1-2.5 2.5h-.75M6 12.5l2 2l4-4");
}

.zwc7ivbtr {
  d: path("M5 7h8a2.5 2.5 0 0 1 2.5 2.5V15a2.5 2.5 0 0 1-2.5 2.5H9l-4 3v-3A2.5 2.5 0 0 1 2.5 15V9.5A2.5 2.5 0 0 1 5 7Z");
}
</style><g class="ulnmmdpxh"><path class="zwc7ivbtr"/><path class="ywlkpyzgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:objection-handling"} {...others} />);
}

export default Component;
