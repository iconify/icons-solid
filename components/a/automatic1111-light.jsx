import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds05xy4_w.css';
import '../../css/f/fwkrdacaj.css';
import '../../css/q/qo_hhtb9e.css';
import '../../css/x/xqd5dlbow.css';
import '../../css/a/a5bc86osr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ds05xy4_w"/><path class="fwkrdacaj"/><path class="qo_hhtb9e"/><path class="xqd5dlbow"/><path class="a5bc86osr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:automatic1111-light"} {...others} />);
}

export default Component;
