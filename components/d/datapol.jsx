import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfth-yblq.css';
import '../../css/y/yzsp5cclf.css';
import '../../css/u/u6upu__6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wfth-yblq"/><path class="yzsp5cclf"/><path class="u6upu__6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:datapol"} {...others} />);
}

export default Component;
