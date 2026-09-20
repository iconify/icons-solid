import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nviailsxc.css';
import '../../css/v/vmdd06bng.css';
import '../../css/c/ck-cmbcxc.css';
import '../../css/u/u3jmhobjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="nviailsxc"/><path class="vmdd06bng"/><path class="ck-cmbcxc"/><path class="u3jmhobjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:account-group-1"} {...others} />);
}

export default Component;
