import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zp2uj-hro {
  fill: currentColor;
  d: path("M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.01 4.01 0 0 0 3 10c0 2.21 1.79 4 4 4c.12 0 .23-.02.34-.02l3.83 7.31c.38.72 1.41.71 1.78-.01l3.73-7.31c.11.01.21.03.32.03c2.21 0 4-1.79 4-4c0-1.71-1.08-3.19-2.62-3.76m-6.33 12.39l-2.73-5.21a6.47 6.47 0 0 0 5.4-.02z");
}
</style><path class="zp2uj-hro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-icecream"} {...others} />);
}

export default Component;
