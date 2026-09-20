import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5363obow {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h1.423V6H4zm14.577 0H20V6h-1.423z");
}
</style><path class="m5363obow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:width-full-sharp"} {...others} />);
}

export default Component;
