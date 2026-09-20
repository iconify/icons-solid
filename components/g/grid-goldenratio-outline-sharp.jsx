import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p7h6winbq {
  fill: currentColor;
  d: path("M9 22v-7H2v-2h7v-2H2V9h7V2h2v7h2V2h2v7h7v2h-7v2h7v2h-7v7h-2v-7h-2v7zm2-9h2v-2h-2z");
}
</style><path class="p7h6winbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-goldenratio-outline-sharp"} {...others} />);
}

export default Component;
