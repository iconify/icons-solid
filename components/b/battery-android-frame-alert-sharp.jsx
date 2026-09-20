import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.reir_ycgi {
  fill: currentColor;
  d: path("M20.288 16.213Q20 15.925 20 15.5t.288-.712T21 14.5t.713.288t.287.712t-.288.713T21 16.5t-.712-.288M20 13V7h2v6zM1 18V6h17v2H3v8h15q0 .575.213 1.088t.562.912zm3-3V9h14v6z");
}
</style><path class="reir_ycgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-frame-alert-sharp"} {...others} />);
}

export default Component;
