import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7e1lvb-a.css';
import '../../css/i/i-u8wbcid.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o5a5dzf_w.css';
import '../../css/p/p89qpiyno.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="t7e1lvb-a"/><path class="i-u8wbcid"/><g class="jn8qy4bru"><path class="o5a5dzf_w"/><circle class="p89qpiyno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:female-sign"} {...others} />);
}

export default Component;
