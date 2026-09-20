import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sg261ubsn {
  fill: currentColor;
  d: path("M2 17V7h8v2H4v6h4v-2H6v-2h4v6zm10 0V7h2v10zm4 0V7h7v2h-5v2h4v2h-4v4z");
}
</style><path class="sg261ubsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gif-2-outline-sharp"} {...others} />);
}

export default Component;
