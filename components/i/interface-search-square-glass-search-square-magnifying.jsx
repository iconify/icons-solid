import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hrjfpsb2u.css';
import '../../css/o/of6j-t7or.css';
import '../../css/y/yph-txb3i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="hrjfpsb2u"/><path class="of6j-t7or"/><rect class="yph-txb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-search-square-glass-search-square-magnifying"} {...others} />);
}

export default Component;
