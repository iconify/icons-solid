import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqv0rlgud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 20l2-6c.597-1.792 2.208-3 4-3h8c.984 0 1.492 1.524 1 3l-1 3c-.597 1.792-2.208 3-4 3zm14-9v-1a4 4 0 0 0-4-4h-3l-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2");
}
</style><path class="fqv0rlgud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-open-round"} {...others} />);
}

export default Component;
