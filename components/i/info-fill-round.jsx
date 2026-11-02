import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebt7lcckq {
  fill: currentColor;
  d: path("M12.01 5a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2ZM13 18a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Z");
}
</style><path class="ebt7lcckq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:info-fill-round"} {...others} />);
}

export default Component;
