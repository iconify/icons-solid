import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kbvxr1bzo {
  fill: currentColor;
  d: path("M235.37 213.84L132.75 53.5l22.62-35.34a4 4 0 1 0-6.74-4.32L128 46.08l-20.63-32.24a4 4 0 0 0-6.74 4.32l22.62 35.34L20.63 213.84A4 4 0 0 0 24 220h208a4 4 0 0 0 3.37-6.16M79 212l49-76.58L177 212Zm107.52 0l-55.14-86.16a4 4 0 0 0-6.74 0L69.49 212H31.31L128 60.92L224.69 212Z");
}
</style><path class="kbvxr1bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tipi-thin"} {...others} />);
}

export default Component;
