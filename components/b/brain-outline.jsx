import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_sl74nof.css';
import '../../css/q/qzfku3wns.css';
import '../../css/n/n0payybjm.css';
import '../../css/x/x0iqjbb6u.css';
import '../../css/z/z6pm0jbuv.css';
import '../../css/g/gsr-h6bma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_sl74nof"/><path class="qzfku3wns"/><path class="n0payybjm"/><path class="x0iqjbb6u"/><path class="z6pm0jbuv"/><path class="gsr-h6bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brain-outline"} {...others} />);
}

export default Component;
