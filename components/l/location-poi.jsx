import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stgrhqeqj.css';
import '../../css/k/k1_3dpb1f.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="stgrhqeqj"/><path class="k1_3dpb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:location-poi"} {...others} />);
}

export default Component;
