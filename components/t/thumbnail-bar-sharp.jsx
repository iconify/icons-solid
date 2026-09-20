import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kh989uf3m {
  fill: currentColor;
  d: path("M3 19V5h5v14zm6 0V5h12v14z");
}
</style><path class="kh989uf3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thumbnail-bar-sharp"} {...others} />);
}

export default Component;
