import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.knd8u6ctl {
  fill: currentColor;
  d: path("M1 14.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0zm7 0a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0zM4.5 13A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h1A1.5 1.5 0 0 1 7 4.5v7A1.5 1.5 0 0 1 5.5 13zM4 11.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm6-2a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 14 9.5v-3A1.5 1.5 0 0 0 12.5 5h-1A1.5 1.5 0 0 0 10 6.5zm1.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z");
}
</style><path class="knd8u6ctl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-distribute-left-16-regular"} {...others} />);
}

export default Component;
