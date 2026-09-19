import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjecepb2m {
  fill: currentColor;
  d: path("m6.83 11l1.59 1.59L7 14l-4-4l4-4l1.41 1.41L6.83 9H15c1.1 0 2 .9 2 2v9h-2v-9z");
}
</style><path class="cjecepb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-turn-left"} {...others} />);
}

export default Component;
