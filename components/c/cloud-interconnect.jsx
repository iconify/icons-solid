import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s3l-wqo3v.css';
import '../../css/w/wywkoybsn.css';
import '../../css/k/khpz2vyvx.css';
import '../../css/e/eenddsb4b.css';
import '../../css/c/ce-0vbbzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s3l-wqo3v"/><path class="wywkoybsn"/><path class="khpz2vyvx"/><path class="eenddsb4b"/><path class="ce-0vbbzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-interconnect"} {...others} />);
}

export default Component;
