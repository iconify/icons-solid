import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/boqjbeb7u.css';
import '../../css/l/lj533bbjw.css';
import '../../css/e/erb1ek8cp.css';
import '../../css/x/xqvscrb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="boqjbeb7u"/><path class="lj533bbjw"/><path class="erb1ek8cp"/><path class="xqvscrb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment-warning"} {...others} />);
}

export default Component;
