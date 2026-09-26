import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.krb8if-xd {
  fill: currentColor;
  d: path("M13.25 12.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm-8.75-8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7M3 7.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM13.25 9a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zm0-3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zm0-3.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="krb8if-xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-collapse-16-filled"} {...others} />);
}

export default Component;
