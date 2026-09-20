import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":249};
const content = `<style>.o01rcbcss {
  fill: var(--svg-color--4f8ce8, #4f8ce8);
  d: path("m2.36 152.515l124.927 65.694l125.91-65.171v29.895l-125.989 65.328L2.36 182.524zM253.197 98.68v29.887l-125.989 65.336L2.36 128.166v-28.99l124.918 64.683zM127.025 0L256 72.258l-64.727 33.455l-64.222 33.762L0 72.188zm.087 30.496L55.194 71.378l71.892 38.062l52.103-27.406l20.79-10.717z");
}
</style><path class="o01rcbcss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:convox-icon"} {...others} />);
}

export default Component;
