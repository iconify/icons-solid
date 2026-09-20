import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fkg_lub8t.css';
import '../../css/m/mz7areb_n.css';
import '../../css/n/nqp-qjzny.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fkg_lub8t"/><rect class="mz7areb_n"/><rect class="nqp-qjzny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-align-horizontal-left-align-design-left"} {...others} />);
}

export default Component;
