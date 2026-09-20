import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1o8a6baj {
  fill: currentColor;
  d: path("M10 19.5v-15q0-.213.144-.356T10.501 4t.356.144T11 4.5v15q0 .213-.144.356t-.357.144t-.356-.144T10 19.5m3.385-4.873V9.392q0-.293.252-.398t.444.106l2.258 2.335q.223.242.223.565t-.223.566L14.08 14.9q-.192.212-.444.11t-.252-.383");
}
</style><path class="e1o8a6baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-menu-open-outline-rounded"} {...others} />);
}

export default Component;
