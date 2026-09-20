import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.da219mu4s {
  fill: currentColor;
  d: path("M3 19V5h5.325v14zm6.325 0V5h5.325v14zm6.325 0V5h5.325v14z");
}
</style><path class="da219mu4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-column-sharp"} {...others} />);
}

export default Component;
