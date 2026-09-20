import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6vc5-xme {
  fill: currentColor;
  d: path("m9 7l1-2V4H9V2h7v2l-1 2h-3V5l-2 2zM8 22v-7.425L12 7h4v15zm2-2h4V9h-.8L10 15.1zm0 0h4z");
}
</style><path class="g6vc5-xme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cleaning-outline-sharp"} {...others} />);
}

export default Component;
