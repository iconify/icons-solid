import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y0h1idbeg {
  fill: currentColor;
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3Zm0 3H6v14h12V6h-2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Zm1 5h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m3 0h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-3 4h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m3 0h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2");
}
</style><path class="y0h1idbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clipboard-list-fill-sharp"} {...others} />);
}

export default Component;
