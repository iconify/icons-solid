import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f65r0inkw.css';
import '../../css/n/ngsq4lbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f65r0inkw"/><path class="ngsq4lbpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-check-corner"} {...others} />);
}

export default Component;
