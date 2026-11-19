import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nndzaacpq.css';
import '../../css/j/jt7s27u2c.css';
import '../../css/o/og5aim40b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nndzaacpq"/><path class="jt7s27u2c"/><path clip-rule="evenodd" class="og5aim40b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:powder"} {...others} />);
}

export default Component;
