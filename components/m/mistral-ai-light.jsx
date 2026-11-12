import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igse0ywyr.css';
import '../../css/f/fryw_qe2v.css';
import '../../css/o/oov8yuuut.css';
import '../../css/x/x8rt_pe9r.css';
import '../../css/v/v24tgxb9s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="igse0ywyr"/><path class="fryw_qe2v"/><path class="oov8yuuut"/><path class="x8rt_pe9r"/><path class="v24tgxb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mistral-ai-light"} {...others} />);
}

export default Component;
