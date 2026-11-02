import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.haj0-xbig {
  fill: currentColor;
  d: path("M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5Zm7 7V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0m4 0V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0m4-8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0Z");
}
</style><path class="haj0-xbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:container-fill-round"} {...others} />);
}

export default Component;
