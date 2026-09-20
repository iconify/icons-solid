import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqihm95pz {
  fill: currentColor;
  d: path("M20.11 21.53L18.579 20H4V5.421L2.47 3.885l.707-.708l17.646 17.646l-.713.708ZM5 19h12.579l-2.5-2.5H7l2.5-3.308l1.885 2.283l1.138-1.53L5 6.42V19Zm15-1.825l-1-1V5H7.825l-1-1H20v13.175Zm-6.525-6.525Zm-2.163 2.083Z");
}
</style><path class="iqihm95pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:image-not-supported-outline-sharp"} {...others} />);
}

export default Component;
