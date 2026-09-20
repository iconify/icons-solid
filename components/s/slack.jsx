import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dq684-b6u.css';
import '../../css/h/h8nb4lb9a.css';
import '../../css/z/z6odn989q.css';
import '../../css/o/ofmbieo8c.css';

const viewBox = {"width":2447.6,"height":2452.5};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="dq684-b6u"/><path class="h8nb4lb9a"/><path class="z6odn989q"/><path class="ofmbieo8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:slack"} {...others} />);
}

export default Component;
