import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.du7r9rb5t {
  fill: currentColor;
  d: path("M19 6a3 3 0 0 1 3 3v2a1 1 0 0 1-.168.555l-4 6A1 1 0 0 1 17 18H7a1 1 0 0 1-.832-.445l-4-6A1 1 0 0 1 2 11V9a3 3 0 0 1 3-3ZM8 12h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2");
}
</style><path class="du7r9rb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hdmi-fill"} {...others} />);
}

export default Component;
