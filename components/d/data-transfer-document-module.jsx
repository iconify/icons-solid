import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut32syxaf.css';
import '../../css/c/cxps0jbdc.css';
import '../../css/x/xncpgacks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ut32syxaf"/><path class="cxps0jbdc"/><path class="xncpgacks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:data-transfer-document-module"} {...others} />);
}

export default Component;
