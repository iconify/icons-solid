import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6bw2yj_e {
  fill: currentColor;
  d: path("M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z");
}
</style><path class="e6bw2yj_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-file-copy"} {...others} />);
}

export default Component;
