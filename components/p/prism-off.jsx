import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekxdc3dbe.css';
import '../../css/m/mh91eivaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ekxdc3dbe"/><path class="mh91eivaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:prism-off"} {...others} />);
}

export default Component;
