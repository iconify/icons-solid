import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_nbxrbow {
  fill: currentColor;
  d: path("M10 9v4h3a1 1 0 0 1 0 2h-3v3h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2v-3H6a1 1 0 0 1 0-2h2V9a5 5 0 0 1 10 0a1 1 0 0 1-2 0a3 3 0 1 0-6 0");
}
</style><path class="b_nbxrbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-pound-fill"} {...others} />);
}

export default Component;
