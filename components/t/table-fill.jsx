import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bx7v_kb5e {
  fill: currentColor;
  d: path("M6 3h5v5H3V6a3 3 0 0 1 3-3m7 0h5a3 3 0 0 1 3 3v2h-8ZM3 10h8v4H3Zm18 4h-8v-4h8ZM3 16h8v5H6a3 3 0 0 1-3-3Zm10 5v-5h8v2a3 3 0 0 1-3 3Z");
}
</style><path class="bx7v_kb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-fill"} {...others} />);
}

export default Component;
