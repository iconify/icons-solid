import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ymwn462gr {
  fill: currentColor;
  d: path("M5.2 22L3 2h18l-2.2 20zm1.375-6H17.45l1.3-12H5.25z");
}
</style><path class="ymwn462gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:glass-cup-sharp"} {...others} />);
}

export default Component;
