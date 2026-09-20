import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eylj2m_hl.css';
import '../../css/i/i5ijq9zah.css';
import '../../css/e/e_xuapbsu.css';

const viewBox = {"width":65,"height":64};
const content = `<path class="eylj2m_hl"/><path class="i5ijq9zah"/><path class="e_xuapbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-health-education"} {...others} />);
}

export default Component;
