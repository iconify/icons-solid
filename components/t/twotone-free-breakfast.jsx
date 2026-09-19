import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hd9cndbxz {
  fill: currentColor;
  d: path("M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10zm4-5h-2V5h2z");
}

.rx8amib4z {
  fill: currentColor;
  d: path("M6 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="rx8amib4z"/><path class="hd9cndbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-free-breakfast"} {...others} />);
}

export default Component;
