import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.a95e07reb {
  fill: currentColor;
  d: path("M2.75 9a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm9 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm9 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm-18 8a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="a95e07reb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-2-dashes-solid-28-regular"} {...others} />);
}

export default Component;
