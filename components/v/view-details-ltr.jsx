import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_c9k0a4f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m_c9k0a4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:view-details-ltr"} {...others} />);
}

export default Component;
