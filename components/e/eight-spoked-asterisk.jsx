import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.kt-0k7bud {
  fill: var(--svg-color--24bac5, #24bac5);
  d: path("M38.2 34.6L64 32l-25.8-2.6l16.4-20l-20 16.4L32 0l-2.6 25.8l-20-16.4l16.4 20L0 32l25.8 2.6l-16.4 20l20-16.4L32 64l2.6-25.8l20 16.4z");
}
</style><path class="kt-0k7bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:eight-spoked-asterisk"} {...others} />);
}

export default Component;
