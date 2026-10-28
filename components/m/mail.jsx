import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/c/cxyka7bkv.css';
import '../../css/g/giird_87j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="cxyka7bkv"/><path class="giird_87j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:mail"} {...others} />);
}

export default Component;
