import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.sabkaqbza {
  fill: currentColor;
  d: path("M5.366 20.884a1.25 1.25 0 0 0 1.768 0L16 12.018l8.866 8.866a1.25 1.25 0 0 0 1.768-1.768l-9.75-9.75a1.25 1.25 0 0 0-1.768 0l-9.75 9.75a1.25 1.25 0 0 0 0 1.768");
}
</style><path class="sabkaqbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-up-32-filled"} {...others} />);
}

export default Component;
