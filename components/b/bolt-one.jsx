import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/thjwbcb-r.css';
import '../../css/s/saavl5qcz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFvy1j9DU"><g class="rohhhzb0l"><path class="thjwbcb-r"/><path class="saavl5qcz"/></g></mask></defs><path mask="url(#SVGFvy1j9DU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bolt-one"} {...others} />);
}

export default Component;
