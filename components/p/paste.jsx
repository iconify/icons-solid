import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sr7wimb_z.css';
import '../../css/b/brz1qob_k.css';
import '../../css/w/w5rvjq__c.css';
import '../../css/l/ljaj9lbfh.css';
import '../../css/t/t2pjj7bhr.css';
import '../../css/l/l8fth8b-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sr7wimb_z wm-shadow"/><path class="brz1qob_k wm-shadow"/><path class="w5rvjq__c"/><path class="ljaj9lbfh"/><path class="t2pjj7bhr"/><path class="l8fth8b-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:paste"} {...others} />);
}

export default Component;
