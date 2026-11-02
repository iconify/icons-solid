import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s--6czbuf {
  fill: currentColor;
  d: path("M6 8.829V10a.997.997 0 0 0 1 1h10a1 1 0 0 0 1-1V8.829a3 3 0 1 1 2 0V10a3 3 0 0 1-3 3h-4v2.171a3 3 0 1 1-2 0V13H7a3 3 0 0 1-3-3V8.829a3 3 0 1 1 2 0");
}
</style><path class="s--6czbuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-fork-fill"} {...others} />);
}

export default Component;
