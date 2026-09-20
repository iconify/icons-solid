import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7d6w8btp {
  fill: currentColor;
  d: path("M17.5 20.75a1.25 1.25 0 1 1 2.499 0a1.25 1.25 0 0 1-2.499 0m.5-3.5V2.75a.75.75 0 0 1 1.493-.102l.007.102v14.5a.75.75 0 0 1-1.493.102zm-7 3.5a1.25 1.25 0 1 1 2.499 0a1.25 1.25 0 0 1-2.499 0m.5-3.5V2.75a.75.75 0 0 1 1.493-.102L13 2.75v14.5a.75.75 0 0 1-1.493.102zm-7 3.5a1.25 1.25 0 1 1 2.499 0a1.25 1.25 0 0 1-2.499 0m.5-3.5V2.75a.75.75 0 0 1 1.493-.102l.007.102v14.5a.75.75 0 0 1-1.493.102z");
}
</style><path class="s7d6w8btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-bullet-list-270-24-regular"} {...others} />);
}

export default Component;
