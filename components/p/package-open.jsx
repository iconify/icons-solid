import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nr8xmjbyq.css';
import '../../css/r/rtunwgx1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nr8xmjbyq"/><path class="rtunwgx1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:package-open"} {...others} />);
}

export default Component;
