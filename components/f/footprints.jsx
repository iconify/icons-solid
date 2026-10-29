import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sjh-tuiwl.css';
import '../../css/u/uslgrjk2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sjh-tuiwl"/><path class="uslgrjk2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:footprints"} {...others} />);
}

export default Component;
