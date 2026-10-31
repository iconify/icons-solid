import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbjk-gfaa.css';
import '../../css/x/xkdm2nalm.css';
import '../../css/o/ok4lwrvqs.css';
import '../../css/b/b_b50_bch.css';
import '../../css/d/dlghj7bkz.css';
import '../../css/r/r3sketbqf.css';
import '../../css/s/s_bl3ob3c.css';
import '../../css/x/xqts5rr7h.css';
import '../../css/v/vlo054b-h.css';
import '../../css/d/dunm31dvb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="sbjk-gfaa"/><path class="xkdm2nalm"/><path class="ok4lwrvqs"/><path class="b_b50_bch"/><path class="dlghj7bkz"/><path class="r3sketbqf"/><path class="s_bl3ob3c"/><path class="xqts5rr7h"/><path class="vlo054b-h"/><path class="dunm31dvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:vinegar"} {...others} />);
}

export default Component;
