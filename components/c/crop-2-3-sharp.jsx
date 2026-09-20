import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-fxrg6hz {
  fill: currentColor;
  d: path("M6 22V2h12v20z");
}
</style><path class="f-fxrg6hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-2-3-sharp"} {...others} />);
}

export default Component;
