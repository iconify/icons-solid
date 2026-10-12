import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3p4isbef.css';
import '../../css/z/z7e6scc8w.css';
import '../../css/o/odnpcwamu.css';
import '../../css/l/leo-7zbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n3p4isbef"/><path class="z7e6scc8w"/><path class="odnpcwamu"/><path class="leo-7zbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:soil-moisture-global"} {...others} />);
}

export default Component;
