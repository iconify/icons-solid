import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wez-d0bjf.css';
import '../../css/a/a3l3mwbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wez-d0bjf"/><path class="a3l3mwbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:mastercard"} {...others} />);
}

export default Component;
