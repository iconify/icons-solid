import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdngpdd4i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.25 4.176q.978.292 1.755 1.069Q17.25 6.49 17.25 8.25v4.25q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-9q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146V8.25q0-1.76 1.245-3.005q.777-.777 1.755-1.069V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014h3q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146zM6.75 12.5q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h9q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V18q0 1.76-1.245 3.005T13 22.25h-2q-1.76 0-3.005-1.245T6.75 18zm4.5-8.5h1.5v-.75h-1.5z");
}
</style><path class="fdngpdd4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:battery-aaa"} {...others} />);
}

export default Component;
