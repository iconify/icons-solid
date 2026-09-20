import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pycbi7pqw {
  fill: currentColor;
  d: path("M13 9h5l-5-5zM4 22v-5h16v5zm-3-7v-2h22v2zm3-4V2h10l6 6v3z");
}
</style><path class="pycbi7pqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:scan-sharp"} {...others} />);
}

export default Component;
