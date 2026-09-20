import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bnsfdr_so {
  fill: currentColor;
  d: path("M5.5 18h4.8l5-9h3.2V6h-4.8l-5 9H5.5zM3 21V3h18v18z");
}
</style><path class="bnsfdr_so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:escalator-sharp"} {...others} />);
}

export default Component;
