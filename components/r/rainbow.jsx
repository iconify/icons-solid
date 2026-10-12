import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiazytb8b.css';
import '../../css/o/opv0hbcze.css';
import '../../css/z/zk2c6ncue.css';
import '../../css/g/gp04-b1jq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eiazytb8b"/><path class="opv0hbcze"/><path class="zk2c6ncue"/><path class="gp04-b1jq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rainbow"} {...others} />);
}

export default Component;
