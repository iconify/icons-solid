import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zz6g_pbbi.css';
import '../../css/b/bvqtdmbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="zz6g_pbbi"/><path class="bvqtdmbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:medium-logo-2"} {...others} />);
}

export default Component;
