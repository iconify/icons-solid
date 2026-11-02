import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z5t3-2bqo {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm14 2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0 4H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-8 4a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z");
}
</style><path class="z5t3-2bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-menu-fill"} {...others} />);
}

export default Component;
