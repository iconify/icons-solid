import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.xo-ygvgzz {
  fill: currentColor;
  d: path("M6.826 4a.5.5 0 0 0-.433.25l-3.176 5.5a.5.5 0 0 0 0 .5l3.176 5.5a.5.5 0 0 0 .433.25h6.35a.5.5 0 0 0 .433-.25l3.176-5.5a.5.5 0 0 0 0-.5l-3.176-5.5a.5.5 0 0 0-.433-.25zm-1.3-.25a1.5 1.5 0 0 1 1.3-.75h6.35a1.5 1.5 0 0 1 1.3.75l3.175 5.5a1.5 1.5 0 0 1 0 1.5l-3.176 5.5a1.5 1.5 0 0 1-1.299.75h-6.35a1.5 1.5 0 0 1-1.3-.75l-3.175-5.5a1.5 1.5 0 0 1 0-1.5z");
}
</style><path class="xo-ygvgzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hexagon-20-regular"} {...others} />);
}

export default Component;
