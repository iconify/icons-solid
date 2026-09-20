import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u2ju54d9g {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h2V6H4zm14 0h2V6h-2z");
}
</style><path class="u2ju54d9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:width-wide-sharp"} {...others} />);
}

export default Component;
