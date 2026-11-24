import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l-t0ysbvx {
  fill: currentColor;
  d: path("M16 22V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1ZM13.5 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM5 8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm0 6h.01a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2m3.01-2H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M11 12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-6 5h.01a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2m3-2a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="l-t0ysbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-desk-fill-sharp"} {...others} />);
}

export default Component;
