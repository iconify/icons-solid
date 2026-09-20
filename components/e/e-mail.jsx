import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/da4x8hbcl.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/m/mzgzwghgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="da4x8hbcl"/><circle class="aqhok2bbj"/><path class="mzgzwghgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:e-mail"} {...others} />);
}

export default Component;
