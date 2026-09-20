import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_fowhusy.css';
import '../../css/q/qccz5acbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_fowhusy"/><path class="qccz5acbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dext"} {...others} />);
}

export default Component;
