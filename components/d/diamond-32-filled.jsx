import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.h006f4bfk {
  fill: currentColor;
  d: path("M12.817 2.319a4.5 4.5 0 0 1 6.363 0l10.499 10.499a4.5 4.5 0 0 1 0 6.364L19.18 29.68a4.5 4.5 0 0 1-6.363 0l-10.5-10.498a4.5 4.5 0 0 1 0-6.364z");
}
</style><path class="h006f4bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:diamond-32-filled"} {...others} />);
}

export default Component;
