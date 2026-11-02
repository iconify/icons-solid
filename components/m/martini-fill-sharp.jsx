import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.idf7tq4oo {
  fill: currentColor;
  d: path("M4 2h16a1.002 1.002 0 0 1 .707 1.707L13 11.414V20h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-8.586L3.293 3.707A1 1 0 0 1 4 2m13.586 2H6.414l1 1h9.172Z");
}
</style><path class="idf7tq4oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:martini-fill-sharp"} {...others} />);
}

export default Component;
