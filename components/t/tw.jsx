import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u31wb71rv.css';
import '../../css/r/rcbe75bbh.css';
import '../../css/q/qroub-blo.css';
import '../../css/b/bayzl6b2g.css';
import '../../css/g/geldb3bcb.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="u31wb71rv"/><path class="rcbe75bbh"/><path class="qroub-blo"/><circle class="bayzl6b2g"/><circle class="geldb3bcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:tw"} {...others} />);
}

export default Component;
