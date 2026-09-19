import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vezrycbxd.css';
import '../../css/q/qdvxhbc0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="vezrycbxd"/><circle class="qdvxhbc0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:switch-on"} {...others} />);
}

export default Component;
