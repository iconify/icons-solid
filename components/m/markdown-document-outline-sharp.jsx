import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kntlnslyw {
  fill: currentColor;
  d: path("M3 21V3h18v8h-2V5H5v14h5v2zm7-4v-2H7v2zm0-4v-2H7v2zm2 9v-9h10v9h-2v-7h-2v5h-2v-5h-2v7zM5 11v8V5z");
}
</style><path class="kntlnslyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markdown-document-outline-sharp"} {...others} />);
}

export default Component;
