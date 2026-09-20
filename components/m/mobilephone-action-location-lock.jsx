import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s4mc_pwhm.css';
import '../../css/f/f__d2e_ze.css';
import '../../css/u/urwd-umbj.css';
import '../../css/v/vrue9i-7y.css';
import '../../css/p/pcjed1bar.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="s4mc_pwhm"/><path class="f__d2e_ze"/><path class="urwd-umbj"/><path class="vrue9i-7y"/><path class="pcjed1bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mobilephone-action-location-lock"} {...others} />);
}

export default Component;
