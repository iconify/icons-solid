import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3699zs_l {
  fill: currentColor;
  d: path("M14.5 3L19 7.5v2.564h-1V8h-4V4H7.248l-1-1zm3.934 12.053Q18 14.619 18 13.987t.434-1.067t1.066-.433t1.066.433t.434 1.067t-.434 1.066q-.433.434-1.066.434t-1.066-.434m1.72 6.632l-4.07-4.07q-.44.326-.984.289t-.948-.44t-.44-.948q-.037-.545.288-.985l-8-8V20h6.135v1H5V6.53L2.046 3.578l.708-.708L20.86 20.977z");
}
</style><path class="d3699zs_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:document-share-off-outline-sharp"} {...others} />);
}

export default Component;
