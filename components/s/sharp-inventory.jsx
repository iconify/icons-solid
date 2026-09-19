import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzdbkrbti {
  fill: currentColor;
  d: path("M21 11.5L15.51 17l-3.01-3l-1.5 1.5l4.51 4.5l6.99-7z");
}

.sa-fxyelv {
  fill: currentColor;
  d: path("M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h8v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1");
}
</style><path class="sa-fxyelv"/><path class="jzdbkrbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-inventory"} {...others} />);
}

export default Component;
