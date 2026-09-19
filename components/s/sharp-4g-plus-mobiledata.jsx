import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcsexnbws {
  fill: currentColor;
  d: path("M13 11v2h2v2h-4V9h6V7H9v10h8v-6zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7z");
}
</style><path class="dcsexnbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-4g-plus-mobiledata"} {...others} />);
}

export default Component;
