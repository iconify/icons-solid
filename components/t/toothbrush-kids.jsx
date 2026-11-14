import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwmjoob9d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 6.5v4.25H19V6.5q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v4.363q1.75.443 1.75 2.637v2q0 2.75-2.75 2.75h-3q-.622 0-1.487-.288q-.635-.212-1.013-.212H4.5q-3.25 0-3.25-3.25t3.25-3.25H14q.378 0 1.013-.212q.541-.18.987-.248V6.5q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146");
}
</style><path class="gwmjoob9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:toothbrush-kids"} {...others} />);
}

export default Component;
