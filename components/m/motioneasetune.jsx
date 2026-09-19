import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zlpn6ebcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.076 20.528v6.944m-7.53-14.559V35.39M23.966 5.5v37m-7.411-29.587V35.39M8.924 20.528v6.944");
}
</style><path class="zlpn6ebcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:motioneasetune"} {...others} />);
}

export default Component;
