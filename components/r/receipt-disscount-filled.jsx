import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjc_5qbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjc_5qbxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:receipt-disscount-filled"} {...others} />);
}

export default Component;
