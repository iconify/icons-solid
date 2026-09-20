import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aukydqbke {
  fill: currentColor;
  d: path("m20.45 23.3l-3.3-3.3H2V4h2l2 2H3.15L.65 3.5l1.425-1.425l19.8 19.8zM22 19.15L15.85 13H19V7h-8v1.15L6.85 4H22z");
}
</style><path class="aukydqbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-off-sharp"} {...others} />);
}

export default Component;
