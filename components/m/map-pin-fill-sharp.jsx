import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7mm91p0x {
  fill: currentColor;
  d: path("M8.963 19.876c-1.802-1.661-3.349-3.669-4.226-5.974A10.9 10.9 0 0 1 4 10a7.98 7.98 0 0 1 2.343-5.657A7.98 7.98 0 0 1 12 2a7.98 7.98 0 0 1 5.657 2.343A7.98 7.98 0 0 1 20 10c-.001 3.878-2.192 7.322-4.963 9.876a20 20 0 0 1-2.482 1.956a1 1 0 0 1-1.11 0a20 20 0 0 1-2.482-1.956m.273-12.044a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335");
}
</style><path class="t7mm91p0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:map-pin-fill-sharp"} {...others} />);
}

export default Component;
