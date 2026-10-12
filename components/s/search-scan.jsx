import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbiwzjfep.css';
import '../../css/n/n715z3zzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbiwzjfep"/><path class="n715z3zzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:search-scan"} {...others} />);
}

export default Component;
