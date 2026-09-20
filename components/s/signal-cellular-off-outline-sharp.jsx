import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lf_tcybnt {
  fill: currentColor;
  d: path("M5.421 20H18.58L12 13.421zm15.566 2.408L19.579 21H3l8.292-8.292L3.65 5.07l.708-.713L21.7 21.7zM21 18.194l-1-1V5.421l-5.886 5.887l-.714-.708L21 3zm-5.708-1.486");
}
</style><path class="lf_tcybnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-off-outline-sharp"} {...others} />);
}

export default Component;
