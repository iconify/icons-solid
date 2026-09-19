import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l3-3swbio {
  fill: currentColor;
  d: path("m12.36 6l.08.39l.32 1.61H18v6h-3.36l-.08-.39l-.32-1.61H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z");
}
</style><path class="l3-3swbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-assistant-photo"} {...others} />);
}

export default Component;
