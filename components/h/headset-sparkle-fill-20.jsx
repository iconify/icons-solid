import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl_le4c4m.css';
import '../../css/k/k0kzc1obh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sl_le4c4m"/><path class="k0kzc1obh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:headset-sparkle-fill-20"} {...others} />);
}

export default Component;
