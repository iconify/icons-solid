import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clphz0b7d {
  fill: currentColor;
  d: path("m12 13.5l6-4l-6-4zm.825 5.5h5.425l.175 1.325l-14.725 1.8L1.85 7.2L5 6.85v2l-.9.125L5.45 19.9zM7 17V2h15v15zm2-2h11V4H9zm5.5-5.5");
}
</style><path class="clphz0b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:animated-images-outline-sharp"} {...others} />);
}

export default Component;
