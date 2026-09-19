import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo5shdcha.css';
import '../../css/x/xvsb00ose.css';
import '../../css/s/sb_pp4bnl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uo5shdcha"/><path class="xvsb00ose"/><path class="sb_pp4bnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pinched-fingers-medium-light"} {...others} />);
}

export default Component;
