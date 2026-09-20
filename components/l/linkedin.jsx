import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikpp05bgn.css';
import '../../css/t/ta9uhpgzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ikpp05bgn"/><path class="ta9uhpgzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:linkedin"} {...others} />);
}

export default Component;
