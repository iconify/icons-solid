import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiz3nrbcm.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/n9yopmb_r.css';
import '../../css/q/q0126ibtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eiz3nrbcm"/><path class="u5h8llb9a"/><path class="n9yopmb_r"/><path class="q0126ibtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-heart"} {...others} />);
}

export default Component;
