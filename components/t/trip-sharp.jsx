import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cup2v--mh {
  fill: currentColor;
  d: path("M18 21V6h4v15zM10 6h4V4h-4zM8 21V2h8v19zm-6 0V6h4v15z");
}
</style><path class="cup2v--mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:trip-sharp"} {...others} />);
}

export default Component;
