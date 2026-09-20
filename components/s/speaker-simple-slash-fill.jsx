import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xzo9y7bil {
  fill: currentColor;
  d: path("M221.92 210.62a8 8 0 1 1-11.84 10.76L168 175.09v48.6a8.29 8.29 0 0 1-3.91 7.18a8 8 0 0 1-9-.56L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h41.55L50.08 45.38a8 8 0 0 1 11.84-10.76ZM200.53 160a8.17 8.17 0 0 0 7.47-8.25v-47.48a8.17 8.17 0 0 0-7.47-8.27a8 8 0 0 0-8.53 8v48a8 8 0 0 0 8.53 8M161 119.87a4 4 0 0 0 7-2.7V32.24a8.25 8.25 0 0 0-2.88-6.39a8 8 0 0 0-10-.16l-43.29 33.64a4 4 0 0 0-.5 5.85ZM231.47 80a8.17 8.17 0 0 0-7.47 8.27v79.46a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V88a8 8 0 0 0-8.53-8");
}
</style><path class="xzo9y7bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:speaker-simple-slash-fill"} {...others} />);
}

export default Component;
