import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/ruwuf5hhk.css';
import '../../css/q/qg0vtdh7r.css';
import '../../css/z/zexsmdb6n.css';
import '../../css/k/k6ah2bceq.css';
import '../../css/k/kkxya78hn.css';
import '../../css/b/bsyc5_b-n.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ruwuf5hhk"/><path class="qg0vtdh7r"/><path class="zexsmdb6n"/><path class="k6ah2bceq"/><path class="kkxya78hn"/><path class="bsyc5_b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-ca"} {...others} />);
}

export default Component;
