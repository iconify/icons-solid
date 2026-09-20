import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gr2theeis {
  fill: currentColor;
  d: path("m10 19l-7-7l7-7zm-1.5-3.625v-6.75L5.125 12zM14 19V5l7 7z");
}
</style><path class="gr2theeis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch-left"} {...others} />);
}

export default Component;
