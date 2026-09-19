import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3vra2bpp.css';
import '../../css/k/k80k31tai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3vra2bpp"/><path class="k80k31tai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-landscape"} {...others} />);
}

export default Component;
