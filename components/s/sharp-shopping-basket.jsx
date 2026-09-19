import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xs6is_7ux {
  fill: currentColor;
  d: path("m17.21 9l-4.39-6.57a1 1 0 0 0-1.66 0L6.77 9H.69L4 21h16.02l3.29-12zm-5.22-4.21L14.8 9H9.18zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2");
}
</style><path class="xs6is_7ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-shopping-basket"} {...others} />);
}

export default Component;
