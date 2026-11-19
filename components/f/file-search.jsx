import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zi3yp8i0r.css';
import '../../css/w/wjbqcl4jb.css';
import '../../css/g/gpa4p37oc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zi3yp8i0r"/><path class="wjbqcl4jb"/><path class="gpa4p37oc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-search"} {...others} />);
}

export default Component;
