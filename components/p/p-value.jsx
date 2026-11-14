import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyi3lc-md {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.462 11.857Q4.714 18.75 2.5 18.75q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014q3.231 0 6.355-7.837Q10.914 7.25 12 7.25q.836 0 2.25 3.063V19.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h6.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014q-2.167 0-4.886-6.801q-.612-1.53-.927-2.25q-.079-.181-.237-.299Q13.626 5.75 12 5.75q-2.103 0-4.538 6.107");
}
</style><path class="iyi3lc-md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:p-value"} {...others} />);
}

export default Component;
