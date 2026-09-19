import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nnhdr7b5c {
  fill: currentColor;
  d: path("M9.5 2c-1.82 0-3.53.5-5 1.35c2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35c5.52 0 10-4.48 10-10S15.02 2 9.5 2");
}
</style><path class="nnhdr7b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-mode-night"} {...others} />);
}

export default Component;
