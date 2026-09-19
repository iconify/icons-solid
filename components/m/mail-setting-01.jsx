import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vmagrtgce.css';
import '../../css/x/xwyy6_3ln.css';
import '../../css/a/azz4f8r2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vmagrtgce"/><path class="xwyy6_3ln"/><path class="azz4f8r2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-setting-01"} {...others} />);
}

export default Component;
