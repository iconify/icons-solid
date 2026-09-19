import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/abbsfc5xb.css';
import '../../css/o/o_cci6bmz.css';

const viewBox = {"width":32,"height":32};
const content = `<defs><filter id="SVG0piCLRbV"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g class="bi12bsetm"><circle class="abbsfc5xb"/><g filter="url(#SVG0piCLRbV)"><path class="o_cci6bmz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mana"} {...others} />);
}

export default Component;
