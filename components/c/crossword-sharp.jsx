import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abe6--brr {
  fill: currentColor;
  d: path("M9 22v-6h6v6zm-7-7V9h6v6zm7 0V9h6v6zm7 0V9h6v6zm0-7V2h6v6z");
}
</style><path class="abe6--brr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crossword-sharp"} {...others} />);
}

export default Component;
