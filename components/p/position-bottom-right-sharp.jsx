import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ja1hrbbqb {
  fill: currentColor;
  d: path("M9 17h9v-3H9zm-6 4V3h18v18z");
}
</style><path class="ja1hrbbqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:position-bottom-right-sharp"} {...others} />);
}

export default Component;
