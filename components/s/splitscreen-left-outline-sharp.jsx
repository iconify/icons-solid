import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xxq4918bf {
  fill: currentColor;
  d: path("M3 21V3h8v18zm10 0V3h8v18zm6-16h-4v14h4z");
}
</style><path class="xxq4918bf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-left-outline-sharp"} {...others} />);
}

export default Component;
