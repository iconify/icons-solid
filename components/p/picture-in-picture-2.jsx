import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq-brsbev.css';
import '../../css/c/cqy661b-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jq-brsbev"/><rect class="cqy661b-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:picture-in-picture-2"} {...others} />);
}

export default Component;
