import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gc7asbwfa {
  fill: currentColor;
  d: path("M9.646 11.146c1.387-1.386 2.008-2.76 2.24-4.352A2 2 0 1 1 13 5c-.001 2.592-.528 4.734-2.647 6.854a.5.5 0 0 1-.708-.708m-6 0c1.387-1.386 2.009-2.76 2.24-4.352A2 2 0 1 1 7 5c-.001 2.592-.528 4.734-2.647 6.854a.5.5 0 0 1-.708-.708");
}
</style><path class="gc7asbwfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-quote-16-filled"} {...others} />);
}

export default Component;
