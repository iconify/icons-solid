import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g585j3bhz {
  fill: currentColor;
  d: path("M18 6H9V4H7v2H6l-4 4v9h20v-9zM4 12h10v5H4zm16 5h-4v-6.17l2-2l2 2z");
}

.iwaq0ccvx {
  fill: currentColor;
  d: path("M4 12h10v5H4zm16 5h-4v-6.17l2-2l2 2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="iwaq0ccvx"/><path class="g585j3bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-gite"} {...others} />);
}

export default Component;
