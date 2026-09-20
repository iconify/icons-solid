import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oiqiz7ycw {
  fill: currentColor;
  d: path("m12 19.842l4.24-4.201q.147-.147.345-.156t.363.156t.166.356t-.166.357l-4.215 4.221q-.306.306-.733.306t-.733-.306l-4.22-4.221q-.147-.146-.154-.347t.159-.367t.357-.156t.357.156zm0-15.684L7.766 8.354q-.147.146-.345.153t-.363-.153q-.166-.165-.168-.357t.162-.357l4.215-4.215q.306-.306.733-.306t.733.306l4.215 4.216q.146.146.153.347t-.159.366q-.165.16-.354.153t-.354-.153z");
}
</style><path class="oiqiz7ycw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:expand-all-rounded"} {...others} />);
}

export default Component;
