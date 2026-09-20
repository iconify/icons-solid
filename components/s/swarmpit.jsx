import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs9a2ybxg.css';
import '../../css/w/wgs1lgb3u.css';
import '../../css/m/m15-ptwxd.css';
import '../../css/a/ab7x2lbyj.css';
import '../../css/q/qi68hf0dw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xs9a2ybxg"/><path class="wgs1lgb3u"/><path class="m15-ptwxd"/><path class="ab7x2lbyj"/><path class="qi68hf0dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swarmpit"} {...others} />);
}

export default Component;
