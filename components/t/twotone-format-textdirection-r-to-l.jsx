import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.at231n7ap {
  fill: currentColor;
  d: path("M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6m4 2c-1.1 0-2-.9-2-2s.9-2 2-2zM4 18l4 4v-3h12v-2H8v-3z");
}

.mbm0fkbtr {
  fill: currentColor;
  d: path("M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="mbm0fkbtr"/><path class="at231n7ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-textdirection-r-to-l"} {...others} />);
}

export default Component;
