import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1gvbqbwd {
  cx: 10px;
  cy: 17px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.jxfzrtcdu {
  fill: currentColor;
  d: path("M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2");
}
</style><circle class="e1gvbqbwd"/><path class="jxfzrtcdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-audiotrack"} {...others} />);
}

export default Component;
