import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzfpdbbvq.css';
import '../../css/l/lnru1zztp.css';
import '../../css/g/gl7lpebjn.css';
import '../../css/m/mqe2qx3yv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="xzfpdbbvq"/><path class="lnru1zztp"/><circle class="gl7lpebjn"/><path class="mqe2qx3yv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-commit-plus"} {...others} />);
}

export default Component;
