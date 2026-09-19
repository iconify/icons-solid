import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8u8afb3q {
  fill: currentColor;
  d: path("M6.7 11.7c.39.39 1.02.39 1.41 0L12 7.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L6.7 10.29a.996.996 0 0 0 0 1.41");
}

.qazv1sbxh {
  fill: currentColor;
  d: path("M6.7 18.29c.39.39 1.02.39 1.41 0L12 14.42l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 12.3a.996.996 0 0 0-1.41 0L6.7 16.88a.996.996 0 0 0 0 1.41");
}
</style><path class="qazv1sbxh"/><path class="g8u8afb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-keyboard-double-arrow-up"} {...others} />);
}

export default Component;
