import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lc-t36tpr {
  fill: currentColor;
  d: path("M7 18V2h13v16zm-4 4V6h2v14h11v2z");
}
</style><path class="lc-t36tpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:content-copy-sharp"} {...others} />);
}

export default Component;
