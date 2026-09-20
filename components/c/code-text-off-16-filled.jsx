import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.u68iu8bxu {
  fill: currentColor;
  d: path("M13.25 7h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5m-3.5-3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m-1 7.5h-7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5m-2-7.5a.75.75 0 0 0 0-1.5H4.622l1.5 1.5zm8.104 10.145l-13-12.999a.5.5 0 0 0-.708.707l.646.646H1.75a.75.75 0 0 0 0 1.5h1.542l1.5 1.5H4.75a.75.75 0 0 0 0 1.5h1.542l1.5 1.5H3.75a.75.75 0 0 0 0 1.5h5.542l4.854 4.854a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.708");
}
</style><path class="u68iu8bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:code-text-off-16-filled"} {...others} />);
}

export default Component;
