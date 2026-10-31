import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ersgu1bwz.css';
import '../../css/w/w3s_6mxba.css';
import '../../css/n/ndyi4ob1u.css';
import '../../css/d/dhnlotbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ersgu1bwz wm-shadow"/><path class="w3s_6mxba wm-shadow"/><path class="ndyi4ob1u"/><path class="dhnlotbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:coffin"} {...others} />);
}

export default Component;
