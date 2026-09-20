import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tzprtrnmn {
  fill: currentColor;
  d: path("M13 14h2v-3h3V9h-3V6h-2v3h-3v2h3zm-7 4V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z");
}
</style><path class="tzprtrnmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:library-add-outline-sharp"} {...others} />);
}

export default Component;
