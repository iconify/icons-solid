import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkduq0b3q.css';
import '../../css/n/n0k2q9-gv.css';
import '../../css/b/b2mkaccsb.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="dkduq0b3q"/><path clip-rule="evenodd" class="n0k2q9-gv"/><path class="b2mkaccsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:siren-filled"} {...others} />);
}

export default Component;
