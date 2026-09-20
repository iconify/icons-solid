import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/lfxfqtu8m.css';
import '../../css/a/aqcas2i6m.css';
import '../../css/g/ghvo08b3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="lfxfqtu8m"/><circle class="aqcas2i6m"/><path class="ghvo08b3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-search"} {...others} />);
}

export default Component;
