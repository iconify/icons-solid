import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dgvdx1bof {
  fill: currentColor;
  d: path("M1 8C1 5.7909 2.7909 4 5 4L19 4C21.2091 4 23 5.7909 23 8L23 16C23 18.2091 21.2091 20 19 20L5 20C2.7909 20 1 18.2091 1 16L1 8Z");
}
</style><path class="dgvdx1bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ratio-3-2-fill"} {...others} />);
}

export default Component;
