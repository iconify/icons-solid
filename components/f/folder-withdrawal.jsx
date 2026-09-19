import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/u/ursccdz5i.css';
import '../../css/q/q3_2n5bmx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdNghrdfj"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="ursccdz5i"/><path class="q3_2n5bmx"/></g></mask></defs><path mask="url(#SVGdNghrdfj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-withdrawal"} {...others} />);
}

export default Component;
