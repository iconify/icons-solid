import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y79-v1bdj {
  fill: currentColor;
  d: path("M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0h6v-2h-4v-2h2q.825 0 1.413-.587T19 11V9q0-.825-.587-1.412T17 7h-4v2h4v2h-2q-.825 0-1.412.588T13 13z");
}
</style><path class="y79-v1bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-1-2"} {...others} />);
}

export default Component;
