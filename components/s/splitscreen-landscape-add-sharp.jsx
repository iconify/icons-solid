import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wjaqihmtf {
  fill: currentColor;
  d: path("M19.77 8V6h-2V5h2V3h1v2h2v1h-2v2zM6.384 15.616h4.423V8.385H6.385zM3 19V5h12.408q-.012.125-.017.25q-.007.125-.007.25q0 .816.253 1.547q.253.732.69 1.338h-3.135v7.23h4.424v-6.04q.507.354 1.116.563t1.268.247q.256.019.506-.007t.494-.092V19z");
}
</style><path class="wjaqihmtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-landscape-add-sharp"} {...others} />);
}

export default Component;
