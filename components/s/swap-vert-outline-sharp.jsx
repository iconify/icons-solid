import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4u8xwbih {
  fill: currentColor;
  d: path("M8.808 12.308V4.92L5.714 8.016L5 7.308L9.308 3l4.308 4.308l-.714.708L9.808 4.92v7.387zM14.673 21l-4.307-4.308l.713-.707l3.094 3.094v-7.387h1v7.387l3.094-3.095l.714.708z");
}
</style><path class="a4u8xwbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:swap-vert-outline-sharp"} {...others} />);
}

export default Component;
