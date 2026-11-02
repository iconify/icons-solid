import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y44_4jbde {
  fill: currentColor;
  d: path("m13 10.234l3.486-2.091a1 1 0 0 1 1.371.343a1 1 0 0 1-.343 1.371L13.944 12l3.57 2.143a1 1 0 0 1 .343 1.371a1 1 0 0 1-1.371.343L13 13.766V18a1 1 0 0 1-2 0v-4.234l-3.486 2.091a1 1 0 0 1-1.371-.343a1 1 0 0 1 .343-1.371L10.056 12l-3.57-2.143a1 1 0 0 1-.343-1.371a1 1 0 0 1 1.371-.343L11 10.234V6a1 1 0 0 1 2 0Z");
}
</style><path class="y44_4jbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:asterisk-bulk"} {...others} />);
}

export default Component;
