import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3vsjgjyn.css';
import '../../css/y/y8hjambyu.css';
import '../../css/b/b4uzkcb4k.css';
import '../../css/o/o9xzmfo0o.css';
import '../../css/l/le910wibb.css';
import '../../css/i/ilob659su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="k3vsjgjyn"/><path clip-rule="evenodd" class="y8hjambyu"/><circle class="b4uzkcb4k"/><circle class="o9xzmfo0o"/><circle class="le910wibb"/><path class="ilob659su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wheel"} {...others} />);
}

export default Component;
