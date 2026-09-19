import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/uve1j-qpr.css';
import '../../css/g/g0t_6qahn.css';
import '../../css/f/frmm1dwzb.css';
import '../../css/i/ismxphoxz.css';
import '../../css/g/g5rj52b6j.css';
import '../../css/o/op7tkue1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGABmTlcpc"><g class="rohhhzb0l"><path clip-rule="evenodd" class="uve1j-qpr"/><path class="g0t_6qahn"/><path class="frmm1dwzb"/><path class="ismxphoxz"/><path class="g5rj52b6j"/><path class="op7tkue1l"/></g></mask></defs><path mask="url(#SVGABmTlcpc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:maslow-pyramids"} {...others} />);
}

export default Component;
