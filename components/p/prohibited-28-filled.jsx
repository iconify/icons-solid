import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.yf9olnbyp {
  fill: currentColor;
  d: path("M20.329 6.257c-3.928-3.219-9.734-2.995-13.4.672c-3.667 3.666-3.89 9.472-.672 13.4zm1.414 1.414L7.671 21.743c3.928 3.219 9.734 2.995 13.4-.672s3.89-9.472.672-13.4M5.515 5.515c4.686-4.687 12.284-4.687 16.97 0c4.687 4.686 4.687 12.284 0 16.97c-4.686 4.687-12.284 4.687-16.97 0c-4.687-4.686-4.687-12.284 0-16.97");
}
</style><path class="yf9olnbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:prohibited-28-filled"} {...others} />);
}

export default Component;
