import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev16ygbby.css';
import '../../css/i/ig-dzq6hv.css';
import '../../css/d/d6u3u-b3a.css';
import '../../css/g/gbioe_b9y.css';
import '../../css/d/ds970m7sb.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/p/pqk-kr63z.css';
import '../../css/o/ofhv1cerr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ev16ygbby"/><g class="ig-dzq6hv"><circle class="d6u3u-b3a"/><path class="gbioe_b9y"/><path class="ds970m7sb"/></g><g class="x8poo_bjf"><path class="pqk-kr63z"/><circle class="d6u3u-b3a"/><path class="ofhv1cerr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-golfing-light-skin-tone"} {...others} />);
}

export default Component;
