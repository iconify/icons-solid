import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_lwkacpr {
  fill: currentColor;
  d: path("M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2");
}
</style><path class="r_lwkacpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-minus"} {...others} />);
}

export default Component;
