import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcf6_w18s.css';
import '../../css/b/btt_r2bcj.css';
import '../../css/w/wr35f_b0v.css';
import '../../css/w/wz-xm5jiv.css';
import '../../css/s/sl7hd2bim.css';
import '../../css/d/d9z-87btf.css';
import '../../css/r/rz0zd9b0a.css';
import '../../css/w/wwf5bcyfc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tcf6_w18s"/><path class="btt_r2bcj"/><path class="wr35f_b0v"/><path class="wz-xm5jiv"/><path class="sl7hd2bim"/><path class="d9z-87btf"/><path class="rz0zd9b0a"/><circle class="wwf5bcyfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:football-figure-white"} {...others} />);
}

export default Component;
