import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dwgxxyb8f.css';
import '../../css/d/dq2xj-buu.css';
import '../../css/c/cxd44-flo.css';
import '../../css/o/oql-gibjb.css';
import '../../css/a/ae8-4hw4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dwgxxyb8f wm-shadow"/><path class="dq2xj-buu wm-shadow"/><path class="cxd44-flo"/><path class="oql-gibjb"/><path class="ae8-4hw4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:stroller"} {...others} />);
}

export default Component;
