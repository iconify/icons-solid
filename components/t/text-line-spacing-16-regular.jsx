import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.pcnjl7bza {
  fill: currentColor;
  d: path("M12.5 9a.5.5 0 0 1 .5.5v3.793l.646-.646a.5.5 0 0 1 .708.707l-1.5 1.5a.5.5 0 0 1-.707 0l-1.5-1.5a.5.5 0 0 1 .707-.707l.646.646V9.5a.5.5 0 0 1 .5-.5m-6 2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm3-4a.5.5 0 0 1 0 1h-8a.5.5 0 1 1 0-1zm2.725-5.918a.5.5 0 0 1 .629.064l1.5 1.5a.5.5 0 0 1-.707.707L13 2.707V6.5a.5.5 0 1 1-1 0V2.707l-.646.646a.5.5 0 0 1-.707-.707l1.5-1.5zM6.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z");
}
</style><path class="pcnjl7bza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-line-spacing-16-regular"} {...others} />);
}

export default Component;
