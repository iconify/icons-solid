import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qypeg9b1z.css';
import '../../css/s/sloideb6m.css';
import '../../css/t/tlw2j3bce.css';
import '../../css/d/d9990mo1a.css';
import '../../css/c/cc3hlpb5m.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="qypeg9b1z"/><path class="sloideb6m"/><path class="tlw2j3bce"/><path class="d9990mo1a"/><path class="cc3hlpb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:hibernate-light"} {...others} />);
}

export default Component;
