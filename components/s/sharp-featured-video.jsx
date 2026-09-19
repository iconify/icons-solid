import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.celeutb3k {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-11 9H3V5h9z");
}
</style><path class="celeutb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-featured-video"} {...others} />);
}

export default Component;
