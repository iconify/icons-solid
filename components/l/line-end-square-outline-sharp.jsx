import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oldmkuwnp {
  fill: currentColor;
  d: path("M13 15.5h7v-7h-7zm-2 2V13H2v-2h9V6.5h11v11zm5.5-5.5");
}
</style><path class="oldmkuwnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-square-outline-sharp"} {...others} />);
}

export default Component;
