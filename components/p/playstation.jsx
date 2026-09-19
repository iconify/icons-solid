import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsyxn_5xa.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="vsyxn_5xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:playstation"} {...others} />);
}

export default Component;
