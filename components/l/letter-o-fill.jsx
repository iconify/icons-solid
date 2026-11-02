import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xh7b0fb0z {
  fill: currentColor;
  d: path("M7 9v6a5 5 0 0 0 10 0V9A5 5 0 0 0 7 9m5 13h-.003A7 7 0 0 1 5 15V9a7 7 0 1 1 14 0v6a7 7 0 0 1-7 7");
}
</style><path class="xh7b0fb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-o-fill"} {...others} />);
}

export default Component;
