import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.izi-vut5i {
  fill: currentColor;
  d: path("M14.5 7.25a.75.75 0 0 0 1.5 0V5h3.75A2.25 2.25 0 0 1 22 7.25v1.5c0 .567-.452.968-.939 1.008a2.25 2.25 0 0 0 0 4.484c.487.04.939.44.939 1.008v1.5A2.25 2.25 0 0 1 19.75 19H16v-2.25a.75.75 0 0 0-1.5 0V19H4.25A2.25 2.25 0 0 1 2 16.75v-1.5c0-.567.452-.968.938-1.008l.213-.027a2.251 2.251 0 0 0-.213-4.457A1.017 1.017 0 0 1 2 8.75v-1.5A2.25 2.25 0 0 1 4.25 5H14.5zm.75 2.75a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75");
}
</style><path class="izi-vut5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:ticket-horizontal-24-filled"} {...others} />);
}

export default Component;
