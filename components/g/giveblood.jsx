import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hzkyyuekr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.325 24s-7.187 8.786-12.04 8.786S3.5 28.852 3.5 24s3.933-8.786 8.786-8.786S24.326 24 24.326 24m1.903 2.804c2.533 2.572 6.462 5.982 9.485 5.982a8.786 8.786 0 0 0 0-17.572c-3.023 0-6.952 3.41-9.485 5.982");
}
</style><path class="hzkyyuekr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:giveblood"} {...others} />);
}

export default Component;
