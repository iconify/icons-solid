import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o7mc6xwix {
  fill: currentColor;
  d: path("M8 9V6a4 4 0 0 1 8 0v3h2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Zm6-3a2 2 0 1 0-4 0v3h4Zm-3 9.733V18a1 1 0 0 0 2 0v-2.267a2.001 2.001 0 1 0-2 0");
}
</style><path class="o7mc6xwix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-keyhole-fill"} {...others} />);
}

export default Component;
