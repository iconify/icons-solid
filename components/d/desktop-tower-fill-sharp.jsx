import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.id-8k1ham {
  fill: currentColor;
  d: path("M12 18H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Zm5.01-11H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 10H4v6h8Zm6 6v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0m-9 3a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="id-8k1ham"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:desktop-tower-fill-sharp"} {...others} />);
}

export default Component;
