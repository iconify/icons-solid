import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhx6wvbkw {
  fill: currentColor;
  d: path("M10 14h4V6H9v5h3v1h-2zm2-5h-1V8h1zm-6 9V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4zm8.5-3h2v-2H20V9h-1.5V7h-2v2h-2v2h2z");
}
</style><path class="uhx6wvbkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-9-plus-outline-sharp"} {...others} />);
}

export default Component;
