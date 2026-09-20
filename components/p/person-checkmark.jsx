import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jta17kyxk.css';
import '../../css/v/v0j0qihdv.css';
import '../../css/o/oby_l4d-i.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jta17kyxk"/><path class="v0j0qihdv"/><path class="oby_l4d-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:person-checkmark"} {...others} />);
}

export default Component;
