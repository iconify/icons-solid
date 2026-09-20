import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.xp7upo5om {
  fill: currentColor;
  d: path("M7.194 2.101a.9.9 0 0 1 1.614 0L10 4.517V13.4l-1.999-1.051l-3.042 1.599a.9.9 0 0 1-1.306-.949l.58-3.387l-2.46-2.4a.9.9 0 0 1 .499-1.534l3.4-.495z");
}
</style><path class="xp7upo5om"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:star-three-quarter-16-filled"} {...others} />);
}

export default Component;
