import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbef1zfbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mbef1zfbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:thermometer-solid"} {...others} />);
}

export default Component;
