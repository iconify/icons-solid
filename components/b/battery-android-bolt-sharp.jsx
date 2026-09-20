import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dttm6ha1l {
  fill: currentColor;
  d: path("M1 18V6h17.05l-7.2 9H16l-.55 3zm16.675-1l.7-4H15l4.8-6h.525l-.7 4H23l-4.8 6z");
}
</style><path class="dttm6ha1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-bolt-sharp"} {...others} />);
}

export default Component;
