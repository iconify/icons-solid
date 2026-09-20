import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":283};
const content = `<style>.m003cfboq {
  fill: var(--svg-color--3057f4, #3057f4);
  d: path("M28.423 222.25c48.024 29.86 84.58-8.211 84.58-8.211c-13.064 46.678-43.093 55.183-43.093 55.183l6.775 13.539h102.63l6.787-13.539s-30.04-8.505-43.093-55.195c0 0 36.544 38.082 84.568 8.212C275.601 192.39 275.092 76.459 128 0C-19.092 76.436-19.601 192.38 28.423 222.25");
}
</style><path class="m003cfboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:calibre-icon"} {...others} />);
}

export default Component;
