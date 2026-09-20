import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p8mthqbzg {
  fill: currentColor;
  d: path("M9 17.192V6.808L17.154 12z");
}
</style><path class="p8mthqbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:play-arrow"} {...others} />);
}

export default Component;
