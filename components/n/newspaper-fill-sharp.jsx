import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rnk78sbet {
  fill: currentColor;
  d: path("M8 3h13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8ZM6 7v14H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm12 0h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-6 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6 4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="rnk78sbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:newspaper-fill-sharp"} {...others} />);
}

export default Component;
