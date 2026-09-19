import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/c/ctwbjd_8y.css';
import '../../css/g/g0ggjib8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="ctwbjd_8y"/><path class="g0ggjib8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:minus-circle"} {...others} />);
}

export default Component;
