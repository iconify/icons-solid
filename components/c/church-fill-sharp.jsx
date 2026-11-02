import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrzliovwo {
  fill: currentColor;
  d: path("M13 4h1a1 1 0 0 1 0 2h-1v.586l3.707 3.707A1 1 0 0 1 17 11v1.382l3.447 1.724A1 1 0 0 1 21 15v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6c0-.379.214-.725.553-.894L7 12.382V11c0-.265.105-.52.293-.707L11 6.586V6h-1a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0Z");
}
</style><path class="hrzliovwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:church-fill-sharp"} {...others} />);
}

export default Component;
