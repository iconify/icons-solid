import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uyhg2kopr {
  fill: currentColor;
  d: path("M15 4a1 1 0 0 1 0 2h-2v2h3a1 1 0 0 1 1 1v2h3v-1a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-1h-3v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2H4v1a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v1h3V9a1 1 0 0 1 1-1h3V6H9a1 1 0 0 1 0-2Z");
}
</style><path class="uyhg2kopr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:valve-fill-sharp"} {...others} />);
}

export default Component;
