import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmv4hfbru {
  fill: currentColor;
  d: path("M9 14h10l-3.45-4.5l-2.3 3l-1.55-2zm-3 4V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z");
}
</style><path class="dmv4hfbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-library-outline-sharp"} {...others} />);
}

export default Component;
