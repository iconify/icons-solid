import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se8m_e3yt.css';
import '../../css/h/hp28okb8j.css';
import '../../css/z/z040k9bvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="se8m_e3yt"/><path class="hp28okb8j"/><circle class="z040k9bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:read"} {...others} />);
}

export default Component;
