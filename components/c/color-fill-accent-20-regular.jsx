import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.wda_fxanw {
  fill: currentColor;
  d: path("M4.836 12.5H4A1.5 1.5 0 0 0 2.5 14v2A1.5 1.5 0 0 0 4 17.5h12a1.5 1.5 0 0 0 1.5-1.5v-2c0-.295-.085-.57-.232-.802c-.38.969-1.226 1.802-2.518 1.802c-1.597 0-2.512-1.273-2.71-2.5h-1.062l-.95.95a3 3 0 0 1-4.243 0z");
}
</style><path class="wda_fxanw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:color-fill-accent-20-regular"} {...others} />);
}

export default Component;
