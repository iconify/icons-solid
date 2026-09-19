import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ple5b9loz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ple5b9loz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:calibrate"} {...others} />);
}

export default Component;
