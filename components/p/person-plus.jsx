import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nc0ss4key.css';
import '../../css/s/scuo7ib6n.css';
import '../../css/n/njqf7ab-x.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nc0ss4key"/><path class="scuo7ib6n"/><path class="njqf7ab-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:person-plus"} {...others} />);
}

export default Component;
