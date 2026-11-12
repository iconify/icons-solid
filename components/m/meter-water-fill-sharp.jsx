import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pytbjnwzb {
  fill: currentColor;
  d: path("M4 13H3a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8h1a1 1 0 0 1 0 2h-1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm7.419-6.957a10 10 0 0 0-.695.555q-.79.676-1.477 1.458C8.015 9.464 7 11.222 7 13.143a5 5 0 0 0 10 0c0-1.003-.284-1.982-.73-2.875c-.704-1.409-1.801-2.647-2.992-3.668a10 10 0 0 0-.697-.556a1 1 0 0 0-1.162-.001");
}
</style><path class="pytbjnwzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:meter-water-fill-sharp"} {...others} />);
}

export default Component;
