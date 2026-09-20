import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifw4kjb2r {
  fill: currentColor;
  d: path("m11.5 14.5l7-4.5l-7-4.5zM6 18V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="ifw4kjb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-library-sharp"} {...others} />);
}

export default Component;
