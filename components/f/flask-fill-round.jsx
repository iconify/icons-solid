import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6ultac4f {
  fill: currentColor;
  d: path("M8 2h8a1 1 0 0 1 0 2h-1v4.764l3.894 7.789c.56 1.12.597 2.457.034 3.583a3.44 3.44 0 0 1-1.154 1.328A3.2 3.2 0 0 1 16 22H8c-1.967-.001-3.33-1.698-3.334-3.598a4.1 4.1 0 0 1 .44-1.849L9 8.764V4H8a1 1 0 0 1 0-2m3 7a1 1 0 0 1-.106.447L8.618 14h6.764l-2.276-4.553A1 1 0 0 1 13 9V4h-2Z");
}
</style><path class="u6ultac4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flask-fill-round"} {...others} />);
}

export default Component;
