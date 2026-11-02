import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rpot6h5af {
  fill: currentColor;
  d: path("M9 2v4a1 1 0 0 0 2 0V2h2v4a1 1 0 0 0 2 0V2h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-1v4a3 3 0 1 1-6 0v-4H8a3.004 3.004 0 0 1-3-3V5a3 3 0 0 1 3-3ZM7 12a.997.997 0 0 0 1 1h2a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-1H7Z");
}
</style><path class="rpot6h5af"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brush-fill"} {...others} />);
}

export default Component;
