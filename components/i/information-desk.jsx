import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qjn4lmb3e.css';
import '../../css/h/hs-44vb5a.css';
import '../../css/l/l24rfvyhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qjn4lmb3e"/><path class="hs-44vb5a"/><path class="l24rfvyhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:information-desk"} {...others} />);
}

export default Component;
