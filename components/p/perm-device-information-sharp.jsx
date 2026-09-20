import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w46j4zb4k {
  fill: currentColor;
  d: path("M11 16.5V11h2v5.5zM12 9q-.425 0-.712-.288T11 8t.288-.712T12 7t.713.288T13 8t-.288.713T12 9M5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="w46j4zb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:perm-device-information-sharp"} {...others} />);
}

export default Component;
