import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/d/du_1q6b0d.css';
import '../../css/k/kdreqsbkh.css';
import '../../css/l/lq78wnbxw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTKh2sexh"><g class="hv130ab-t"><path class="du_1q6b0d"/><path class="kdreqsbkh"/><path class="lq78wnbxw"/></g></mask></defs><path mask="url(#SVGTKh2sexh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:boxing"} {...others} />);
}

export default Component;
