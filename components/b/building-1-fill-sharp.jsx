import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rsqw6abah {
  fill: currentColor;
  d: path("M13 4v4.519l.375-.3a1 1 0 0 1 1.25 0l5 4A1 1 0 0 1 20 13v6h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1m-2 1H6v14h2v-6a1 1 0 0 1 .375-.781l2.625-2.1Z");
}
</style><path class="rsqw6abah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-1-fill-sharp"} {...others} />);
}

export default Component;
