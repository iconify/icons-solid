import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz-rw6wtu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz-rw6wtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fingerprint-phone"} {...others} />);
}

export default Component;
