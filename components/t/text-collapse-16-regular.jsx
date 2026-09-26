import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.vcvw12bzu {
  fill: currentColor;
  d: path("M13.5 13a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1zm-9-8.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7M3 7.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM13.5 9a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1z");
}
</style><path class="vcvw12bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-collapse-16-regular"} {...others} />);
}

export default Component;
