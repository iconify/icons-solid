import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgh63sb0t {
  fill: currentColor;
  d: path("M16 21v-9.95h6V21zm1-2h4v-5.95h-4zm3-16v6.05h-8.1l-.9-2.8l-.9 2.8H7.25l2.3 1.85l-.85 2.85L11 12l2.3 1.75l-.85-2.85L14 9.65V17h-2v2h2v2H8v-2h2v-2H2V3z");
}
</style><path class="cgh63sb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:important-devices-sharp"} {...others} />);
}

export default Component;
