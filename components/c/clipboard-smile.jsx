import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/go76f3bqc.css';
import '../../css/x/xptr09bzt.css';
import '../../css/a/a_2ke6t6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="go76f3bqc"/><path class="xptr09bzt"/><path class="a_2ke6t6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clipboard-smile"} {...others} />);
}

export default Component;
