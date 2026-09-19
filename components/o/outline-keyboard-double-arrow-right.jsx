import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ix24v_o1u {
  fill: currentColor;
  d: path("M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z");
}

.xm9bz0bfz {
  fill: currentColor;
  d: path("m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z");
}
</style><path class="ix24v_o1u"/><path class="xm9bz0bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-keyboard-double-arrow-right"} {...others} />);
}

export default Component;
