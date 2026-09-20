import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.nuopzfogy {
  fill: currentColor;
  d: path("M7 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 7 7m2.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2-7a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3");
}
</style><path class="nuopzfogy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:emoji-meh-16-regular"} {...others} />);
}

export default Component;
