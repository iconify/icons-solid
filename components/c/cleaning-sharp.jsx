import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mamjj4b7a {
  fill: currentColor;
  d: path("m9 7l1-2V4H9V2h7v2l-1 2h-3V5l-2 2zM8 22v-7.425L12 7h4v15z");
}
</style><path class="mamjj4b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cleaning-sharp"} {...others} />);
}

export default Component;
