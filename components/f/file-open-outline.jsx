import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y_bvshbmn {
  fill: currentColor;
  d: path("M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v7h-1V8h-4V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192H15.5v1zm15.334.663l-3.45-3.45v2.956h-1V16.5h4.67v1h-2.982l3.45 3.45zM6 20V4z");
}
</style><path class="y_bvshbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:file-open-outline"} {...others} />);
}

export default Component;
