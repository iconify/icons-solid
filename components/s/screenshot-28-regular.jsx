import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.o__uufbhu {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25zm4.25-.25A2.25 2.25 0 0 0 6.5 8.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 1 8.75 8h3a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 1.5 0v-3a2.25 2.25 0 0 0-2.25-2.25zM8 16.25a.75.75 0 0 0-1.5 0v3a2.25 2.25 0 0 0 2.25 2.25h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 1-.75-.75zm13.5 0a.75.75 0 0 0-1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 0 0 1.5h3a2.25 2.25 0 0 0 2.25-2.25z");
}
</style><path class="o__uufbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:screenshot-28-regular"} {...others} />);
}

export default Component;
