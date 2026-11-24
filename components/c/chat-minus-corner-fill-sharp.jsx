import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqxgr3bji {
  fill: currentColor;
  d: path("M10 10v7a1 1 0 0 1-1 1H7.414l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm3 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="gqxgr3bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-minus-corner-fill-sharp"} {...others} />);
}

export default Component;
