import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_wdj5b3k.css';
import '../../css/t/t4y5-pbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_wdj5b3k"/><path class="t4y5-pbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scaling-outline"} {...others} />);
}

export default Component;
