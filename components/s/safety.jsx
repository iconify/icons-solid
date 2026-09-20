import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c32l_ab_t.css';
import '../../css/y/yw2r-p6cc.css';
import '../../css/q/quz6tn28w.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tg-jgkbxj.css';
import '../../css/b/bk6jshypl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c32l_ab_t"/><path class="yw2r-p6cc"/><path class="quz6tn28w"/><g class="ij2x_72vy"><path class="tg-jgkbxj"/><path class="bk6jshypl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:safety"} {...others} />);
}

export default Component;
