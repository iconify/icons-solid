import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4_6otcrb.css';
import '../../css/s/sy_8ez57r.css';
import '../../css/w/wji-c-ehd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r4_6otcrb"/><path class="sy_8ez57r"/><path class="wji-c-ehd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ctc"} {...others} />);
}

export default Component;
