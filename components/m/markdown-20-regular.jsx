import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.o52cwmb_g {
  fill: currentColor;
  d: path("M16 4.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L16 13.293zM2.32 4.033a.5.5 0 0 1 .552.133L7 8.753l4.128-4.587A.5.5 0 0 1 12 4.5v10a.5.5 0 1 1-1 0V5.803L7.372 9.835a.5.5 0 0 1-.744 0L3 5.803V14.5a.5.5 0 1 1-1 0v-10a.5.5 0 0 1 .32-.467");
}
</style><path class="o52cwmb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:markdown-20-regular"} {...others} />);
}

export default Component;
