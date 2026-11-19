import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bobqxxbrr.css';
import '../../css/y/ybvm9xbxq.css';
import '../../css/b/b2cnvv71d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="bobqxxbrr"/><circle class="ybvm9xbxq"/><path clip-rule="evenodd" class="b2cnvv71d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dish"} {...others} />);
}

export default Component;
