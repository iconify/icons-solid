import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jsge3c3yu {
  fill: currentColor;
  d: path("M6 8.829V11h12V8.829a3 3 0 1 1 2 0V12a1 1 0 0 1-1 1h-6v2.171a3 3 0 1 1-2 0V13H5a1 1 0 0 1-1-1V8.829a3 3 0 1 1 2 0");
}
</style><path class="jsge3c3yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-fork-fill-sharp"} {...others} />);
}

export default Component;
