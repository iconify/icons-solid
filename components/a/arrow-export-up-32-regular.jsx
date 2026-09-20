import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.emumfacig {
  fill: currentColor;
  d: path("M26 28a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2zM15.293 2.293a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 1 1-1.414 1.414L17 5.414V24a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 1 1-1.414-1.414z");
}
</style><path class="emumfacig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-export-up-32-regular"} {...others} />);
}

export default Component;
