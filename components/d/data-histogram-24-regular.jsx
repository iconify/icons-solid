import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nzve5dbha {
  fill: currentColor;
  d: path("M13.25 3a2.25 2.25 0 0 1 2.25 2.25V7h3.25A2.25 2.25 0 0 1 21 9.25v11a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-8A2.25 2.25 0 0 1 5.25 10H8.5V5.25A2.25 2.25 0 0 1 10.75 3zm-8 8.5a.75.75 0 0 0-.75.75v7.25h4v-8zm5.5-7a.75.75 0 0 0-.75.75V19.5h4V5.25a.75.75 0 0 0-.75-.75zm4.75 15h4V9.25a.75.75 0 0 0-.75-.75H15.5z");
}
</style><path class="nzve5dbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-histogram-24-regular"} {...others} />);
}

export default Component;
