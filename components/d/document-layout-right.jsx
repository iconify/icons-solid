import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp1ly_bxy.css';
import '../../css/t/tuvamblkg.css';
import '../../css/i/i1958g00u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp1ly_bxy"/><rect class="tuvamblkg"/><path class="i1958g00u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:document-layout-right"} {...others} />);
}

export default Component;
