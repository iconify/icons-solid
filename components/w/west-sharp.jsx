import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ntmeapo2u {
  fill: currentColor;
  d: path("M9.346 18.327L3 11.981l6.346-6.346l.689.688l-5.152 5.158h16.136v1H4.902l5.158 5.158z");
}
</style><path class="ntmeapo2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:west-sharp"} {...others} />);
}

export default Component;
