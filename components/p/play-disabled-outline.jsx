import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sedjrfbqf {
  fill: currentColor;
  d: path("m16.45 13.6l-1.4-1.45l-.95-.9L8 5.15V5l11 7zm3.3 9L13 15.8L8 19v-8.2L1.4 4.2l1.4-1.4l18.4 18.4zM10 15.35l1.55-1L10 12.8zm4.1-4.1");
}
</style><path class="sedjrfbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-disabled-outline"} {...others} />);
}

export default Component;
