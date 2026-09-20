import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjy2ryjzl.css';
import '../../css/h/hq43cullj.css';
import '../../css/j/jbb-0kbnw.css';
import '../../css/t/t2alqib1v.css';
import '../../css/i/i-2p8-bai.css';
import '../../css/x/x3-m8017m.css';
import '../../css/a/ao7h66b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kjy2ryjzl"/><path clip-rule="evenodd" class="hq43cullj"/><path class="jbb-0kbnw"/><path class="t2alqib1v"/><path clip-rule="evenodd" class="i-2p8-bai"/><path class="x3-m8017m"/><path class="ao7h66b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bdx"} {...others} />);
}

export default Component;
