import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x_ymq7q2o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.75 6.5V10q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h7q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V6.5q0-1.76-1.245-3.005T12 2.25T8.995 3.495T7.75 6.5m-.5 7q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T8 12.75h8q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v4q0 1.968-1.391 3.359T12 22.25t-3.359-1.391T7.25 17.5z");
}
</style><path class="x_ymq7q2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:capsule-open"} {...others} />);
}

export default Component;
