import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/p/p1xl0obnf.css';
import '../../css/r/r_-y31b5j.css';
import '../../css/e/eac117bae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="p1xl0obnf"/><path class="r_-y31b5j"/><path class="eac117bae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-sum"} {...others} />);
}

export default Component;
