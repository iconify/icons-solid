import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/v/v5e3usxkm.css';
import '../../css/i/ir0enebei.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xpw5frbge.css';
import '../../css/z/zzo7dubip.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGxtBLacqF" width="17" height="17" x="3" y="4" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="v5e3usxkm"/><path class="ir0enebei"/></mask><g class="ft5dv1b6b"><path mask="url(#SVGxtBLacqF)" class="xpw5frbge"/><path class="zzo7dubip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:edit"} {...others} />);
}

export default Component;
