import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n73pcqbpt {
  fill: currentColor;
  d: path("M13 14v-3h-3V9h3V6h2v3h3v2h-3v3zM2 22V6h4V2h16v16h-4v4zm6-6h12V4H8z");
}
</style><path class="n73pcqbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shadow-add-outline-sharp"} {...others} />);
}

export default Component;
