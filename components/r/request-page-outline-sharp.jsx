import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hj2y1hbsu {
  fill: currentColor;
  d: path("M11 18h2v-1h2v-5h-4v-1h4V9h-2V8h-2v1H9v5h4v1H9v2h2zm-7 4V2h10l6 6v14zm2-2h12V8.85L13.15 4H6zm0 0V4z");
}
</style><path class="hj2y1hbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:request-page-outline-sharp"} {...others} />);
}

export default Component;
