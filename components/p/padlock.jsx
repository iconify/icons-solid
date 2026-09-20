import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqvdm-b2t.css';
import '../../css/m/m_u6hpbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqvdm-b2t"/><path class="m_u6hpbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:padlock"} {...others} />);
}

export default Component;
