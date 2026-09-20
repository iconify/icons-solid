import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.dzym2cchq {
  fill: currentColor;
  d: path("M8.201 8.833a.205.205 0 0 1-.402 0l-.855-4.56a1.075 1.075 0 1 1 2.112 0zM8 2C6.7 2 5.721 3.18 5.96 4.457l.856 4.56a1.205 1.205 0 0 0 2.368 0l.855-4.56A2.075 2.075 0 0 0 8 2m0 11a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="dzym2cchq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:important-16-regular"} {...others} />);
}

export default Component;
