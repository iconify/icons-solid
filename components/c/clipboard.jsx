import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/z3go2ebih.css';
import '../../css/h/hp02mkbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="z3go2ebih"/><rect class="hp02mkbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:clipboard"} {...others} />);
}

export default Component;
