import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kqt12ccgr {
  fill: currentColor;
  d: path("M4.615 15.423V9.231h-.384v-1.5h15.538v1.5h-.384v6.192zm-1.23 2.192V9.308h1.384v2.961h14.462V9.308h1.384v8.307z");
}
</style><path class="kqt12ccgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:weekend-sharp"} {...others} />);
}

export default Component;
