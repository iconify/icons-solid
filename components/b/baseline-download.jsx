import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4qgoeo6x {
  fill: currentColor;
  d: path("M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z");
}
</style><path class="n4qgoeo6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-download"} {...others} />);
}

export default Component;
