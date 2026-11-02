import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhdhh4b-j {
  fill: currentColor;
  d: path("M3 21a1 1 0 0 1 0-2h1V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2h1a3 3 0 0 1 3 3v8h1a1 1 0 0 1 0 2ZM9 9h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m9 10v-8a1 1 0 0 0-1-1h-1v9Zm-9-6h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2");
}
</style><path class="hhdhh4b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-4-fill"} {...others} />);
}

export default Component;
