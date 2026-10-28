import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xieer9b4m.css';
import '../../css/c/ch5hk0asx.css';
import '../../css/f/f-dpwsb_r.css';
import '../../css/g/gr4n4igxp.css';
import '../../css/w/wgmjo7h4z.css';
import '../../css/x/xi1r6wczw.css';
import '../../css/y/ypv6zabzw.css';
import '../../css/l/lgrbzybde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xieer9b4m"/><path class="ch5hk0asx"/><path class="f-dpwsb_r"/><path class="gr4n4igxp"/><circle class="wgmjo7h4z"/><circle class="xi1r6wczw"/><path class="ypv6zabzw"/><path clip-rule="evenodd" class="lgrbzybde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:perfume-women"} {...others} />);
}

export default Component;
