import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u47hdxcgu {
  fill: currentColor;
  d: path("M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24S13.507 5 24 5m0 2.5C14.887 7.5 7.5 14.887 7.5 24S14.887 40.5 24 40.5S40.5 33.113 40.5 24S33.113 7.5 24 7.5M22.75 12c.647 0 1.18.492 1.244 1.122l.006.128V24h6.75a1.25 1.25 0 0 1 .128 2.494l-.128.006h-8a1.25 1.25 0 0 1-1.244-1.122l-.006-.128v-12c0-.69.56-1.25 1.25-1.25");
}
</style><path class="u47hdxcgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:clock-48-regular"} {...others} />);
}

export default Component;
