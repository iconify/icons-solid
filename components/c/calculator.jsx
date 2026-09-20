import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4u4vjb4m.css';
import '../../css/a/alpp-gbyc.css';
import '../../css/p/pddcmsbna.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/t/tffiggcyh.css';
import '../../css/s/svjxeeepc.css';
import '../../css/m/m-mzmpnnz.css';
import '../../css/u/u2p_6-b8n.css';
import '../../css/i/igi5tccfy.css';
import '../../css/p/pav6vtoat.css';
import '../../css/c/cdv3qr4dg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4u4vjb4m"/><circle class="alpp-gbyc"/><circle class="pddcmsbna"/><circle class="f-ksdqydc"/><circle class="tffiggcyh"/><circle class="svjxeeepc"/><circle class="m-mzmpnnz"/><circle class="u2p_6-b8n"/><circle class="igi5tccfy"/><circle class="pav6vtoat"/><path class="cdv3qr4dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:calculator"} {...others} />);
}

export default Component;
