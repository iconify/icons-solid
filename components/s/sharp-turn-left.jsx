import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fh1o-tbgy {
  fill: currentColor;
  d: path("m6.83 11l1.58 1.59L7 14l-4-4l4-4l1.41 1.41L6.83 9H17v11h-2v-9z");
}
</style><path class="fh1o-tbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-turn-left"} {...others} />);
}

export default Component;
