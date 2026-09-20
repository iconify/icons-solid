import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0gygqnek {
  fill: currentColor;
  d: path("M1 20v-6h3v6zm4.75 0v-8h3v8zm4.75 0V9h3v11zm4.75 0V7h3v13zM20 20V4h3v16z");
}
</style><path class="n0gygqnek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:android-cell-5-bar-outline-sharp"} {...others} />);
}

export default Component;
