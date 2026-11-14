import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bce4ev8wi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 15.75h3.25V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146v13.25H16q2.75 0 2.75 2.75T16 21.25H8q-2.75 0-2.75-2.75T8 15.75");
}
</style><path class="bce4ev8wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:curling-stick"} {...others} />);
}

export default Component;
