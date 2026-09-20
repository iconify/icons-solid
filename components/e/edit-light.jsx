import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/h/h0y2fptca.css';
import '../../css/i/ir0enebei.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aodo8cbut.css';
import '../../css/z/zzo7dubip.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVG8dJ0oeeE" width="15" height="15" x="4" y="5" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="h0y2fptca"/><path class="ir0enebei"/></mask><g class="ft5dv1b6b"><path mask="url(#SVG8dJ0oeeE)" class="aodo8cbut"/><path class="zzo7dubip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:edit-light"} {...others} />);
}

export default Component;
