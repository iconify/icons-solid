import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.via4fpbxb {
  fill: currentColor;
  d: path("m12 20.27l-3.846-3.847l.719-.72L12 18.832l3.127-3.127l.72.719zM8.873 8.32l-.72-.72L12 3.754L15.846 7.6l-.719.72L12 5.191z");
}
</style><path class="via4fpbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:unfold-more-outline"} {...others} />);
}

export default Component;
