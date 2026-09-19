import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bm8u3rb-m.css';
import '../../css/z/zviecfb4g.css';
import '../../css/d/dcgw77bis.css';
import '../../css/c/ck7asmbky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><rect class="bm8u3rb-m"/><circle class="zviecfb4g"/><circle class="dcgw77bis"/><circle class="ck7asmbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:password-outline"} {...others} />);
}

export default Component;
