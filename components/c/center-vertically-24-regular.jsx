import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.slt41fv7m {
  fill: currentColor;
  d: path("M21 3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75m0 16.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75M7.25 8A2.25 2.25 0 0 0 5 10.25v3.5A2.25 2.25 0 0 0 7.25 16h9.5A2.25 2.25 0 0 0 19 13.75v-3.5A2.25 2.25 0 0 0 16.75 8zm-.75 2.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z");
}
</style><path class="slt41fv7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:center-vertically-24-regular"} {...others} />);
}

export default Component;
