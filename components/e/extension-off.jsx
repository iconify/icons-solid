import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncrqd2_yz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ncrqd2_yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:extension-off"} {...others} />);
}

export default Component;
