import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ogtyi0qti {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.875 3.75h-6.97q-1.806 0-2.808 1.503l-3.25 4.875q-1.248 1.872 0 3.744l3.25 4.875q1.002 1.503 2.808 1.503h6.97q3.375 0 3.375-3.375v-9.75q0-3.375-3.375-3.375m-8.615 7.5q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-.01q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T7.5 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014z");
}
</style><path class="ogtyi0qti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:price-tag-blank"} {...others} />);
}

export default Component;
