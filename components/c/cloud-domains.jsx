import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyd5-obni.css';
import '../../css/t/th32pl67c.css';
import '../../css/q/q_2n7obtj.css';
import '../../css/z/zvgjxlbcx.css';
import '../../css/b/betwnjbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyd5-obni"/><path class="th32pl67c"/><path class="q_2n7obtj"/><path class="zvgjxlbcx"/><path class="betwnjbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-domains"} {...others} />);
}

export default Component;
