import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vudjtp8wz {
  fill: currentColor;
  d: path("M12.351 9.936a1 1 0 0 1-.702 0l-8-3a1 1 0 0 1 0-1.872l8-3a1 1 0 0 1 .702 0l8 3A1 1 0 0 1 21 6v.014V6v3a1 1 0 0 1-2 0V7.443ZM7 12v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0m4 0v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0m4 0v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0m4 0v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0M3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="vudjtp8wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:university-fill-round"} {...others} />);
}

export default Component;
