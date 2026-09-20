import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwntu8bvo.css';
import '../../css/p/prgp_kb3g.css';
import '../../css/x/xjg8z6b4j.css';
import '../../css/s/sbke0sagr.css';
import '../../css/s/s3cgyyb9p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dwntu8bvo"/><path class="prgp_kb3g"/><path class="xjg8z6b4j"/><path class="sbke0sagr"/><path class="s3cgyyb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-news"} {...others} />);
}

export default Component;
