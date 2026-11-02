import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gz4cdl9wq {
  fill: currentColor;
  d: path("M16 8h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3Z");
}
</style><path class="gz4cdl9wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:first-aid-fill"} {...others} />);
}

export default Component;
