import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbmslsw0u.css';
import '../../css/o/o8v4ohk9d.css';
import '../../css/b/ba2k-sb7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbmslsw0u"/><path class="o8v4ohk9d"/><path class="ba2k-sb7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-in"} {...others} />);
}

export default Component;
