import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v0bjnabvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.487 26.415C40.632 36.789 30.92 43.888 20.794 42.27S3.966 30.93 5.821 20.556C7.068 13.584 11.982 7.786 18.585 5.5m10.052.558l12.854 12.39");
}
</style><path class="v0bjnabvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cmf-watch"} {...others} />);
}

export default Component;
