import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s1azdbcfl {
  fill: currentColor;
  d: path("M232 220h-64.82a100 100 0 1 0-39.18 8h104a4 4 0 0 0 0-8M36 128a92 92 0 1 1 92 92a92.1 92.1 0 0 1-92-92m92-28a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m20 108a20 20 0 1 0-20 20a20 20 0 0 0 20-20m-32 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m60-28a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-96-8a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 32a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="s1azdbcfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:film-reel-thin"} {...others} />);
}

export default Component;
