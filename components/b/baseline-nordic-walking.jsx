import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dagae7tgi {
  fill: currentColor;
  d: path("M19 23h-1.5v-9H19zM7.53 14H6l-2 9h1.53zm5.97-8.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M9.8 8.9L7 23h2.1l1.8-8l2.1 2v6h2v-7.5l-2.1-2l.6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6a2.145 2.145 0 0 0-2.65-.84L6 8.3V13h2V9.6z");
}
</style><path class="dagae7tgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-nordic-walking"} {...others} />);
}

export default Component;
