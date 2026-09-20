import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce_m_3btn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ce_m_3btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:paper"} {...others} />);
}

export default Component;
