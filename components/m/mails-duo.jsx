import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twofskbvn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ukdpmtbhl.css';
import '../../css/p/p-gxi9bkc.css';
import '../../css/n/ntl4se4mo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary twofskbvn"/><g class="dt0cm9dhy primary"><path class="ukdpmtbhl"/><path class="p-gxi9bkc"/><path class="ntl4se4mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mails-duo"} {...others} />);
}

export default Component;
