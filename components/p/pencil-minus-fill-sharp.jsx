import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pvtxg3bga {
  fill: currentColor;
  d: path("M10 6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm4.707 2.293L14 7.586l1.293-1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414L18.414 12ZM5 20v-3c0-.265.105-.52.293-.707L12.586 9L17 13.414l-7.293 7.293A1 1 0 0 1 9 21H6a1 1 0 0 1-1-1");
}
</style><path class="pvtxg3bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pencil-minus-fill-sharp"} {...others} />);
}

export default Component;
