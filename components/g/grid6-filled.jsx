import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvfc_ab5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dvfc_ab5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:grid6-filled"} {...others} />);
}

export default Component;
