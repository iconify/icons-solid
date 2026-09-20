import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.do-xv8r6x {
  fill: currentColor;
  d: path("M196 224a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m-68-28a60.07 60.07 0 0 0 60-60V56a4 4 0 0 0-8 0v80a52 52 0 0 1-104 0V56a4 4 0 0 0-8 0v80a60.07 60.07 0 0 0 60 60");
}
</style><path class="do-xv8r6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-underline-thin"} {...others} />);
}

export default Component;
