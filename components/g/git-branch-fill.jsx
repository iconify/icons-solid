import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lzw5ddb4k {
  fill: currentColor;
  d: path("M6 8.829v2.342A3 3 0 0 1 7 11h10a1 1 0 0 0 1-1V8.829a3 3 0 1 1 2 0V10a3 3 0 0 1-3 3H7a.997.997 0 0 0-1 1v1.171a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2 0");
}
</style><path class="lzw5ddb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-branch-fill"} {...others} />);
}

export default Component;
