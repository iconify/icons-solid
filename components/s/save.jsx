import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u0wobb-1e.css';
import '../../css/x/xu01bccni.css';
import '../../css/a/aloxzvhsw.css';
import '../../css/u/up_78dixb.css';
import '../../css/b/b-jqcob_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u0wobb-1e wm-shadow"/><path class="wm-shadow xu01bccni"/><path class="aloxzvhsw"/><path class="up_78dixb"/><path class="b-jqcob_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:save"} {...others} />);
}

export default Component;
