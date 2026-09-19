import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jsfnf4ppw.css';
import '../../css/c/c2z__ccea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="jsfnf4ppw"/><path class="c2z__ccea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:save"} {...others} />);
}

export default Component;
