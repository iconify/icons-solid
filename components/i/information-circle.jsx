import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zhd__9bse.css';
import '../../css/u/u27ipdbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="zhd__9bse"/><path class="u27ipdbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:information-circle"} {...others} />);
}

export default Component;
