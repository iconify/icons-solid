import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q8cknmb9f {
  fill: currentColor;
  d: path("M7.829 5h8.342a3 3 0 1 1 0 2H7.829A3.01 3.01 0 0 1 6 8.829v6.342a3 3 0 1 1-2 0V8.829A3 3 0 1 1 7.829 5M17 12a3 3 0 0 1 3 3v6a1 1 0 0 1-2 0v-6a1 1 0 0 0-1-1h-3.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L13.414 12Z");
}
</style><path class="q8cknmb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-rebase-fill"} {...others} />);
}

export default Component;
