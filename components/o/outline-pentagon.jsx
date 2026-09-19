import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bah_1ol8l {
  fill: currentColor;
  d: path("M19.63 9.78L16.56 19H7.44L4.37 9.78L12 4.44zM2 9l4 12h12l4-12l-10-7z");
}
</style><path class="bah_1ol8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-pentagon"} {...others} />);
}

export default Component;
