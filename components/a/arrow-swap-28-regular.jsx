import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.n571ndmex {
  fill: currentColor;
  d: path("M17.78 2.72a.75.75 0 1 0-1.06 1.06l3.72 3.72H5.75a.75.75 0 0 0 0 1.5h14.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5a.75.75 0 0 0 0-1.06zm-6.5 12.56a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 1 0 1.06-1.06L7.56 20.5h14.69a.75.75 0 0 0 0-1.5H7.56z");
}
</style><path class="n571ndmex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-swap-28-regular"} {...others} />);
}

export default Component;
