import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iblxv-boo.css';
import '../../css/t/twg1_zbxj.css';
import '../../css/e/ex20ps24v.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/k/k0d8hdbwy.css';
import '../../css/y/y4ij6tyga.css';
import '../../css/y/y_-_q-u8u.css';
import '../../css/a/aa_6q9b9u.css';
import '../../css/j/jj_-k1_mh.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="iblxv-boo"/><path class="twg1_zbxj"/><path class="ex20ps24v"/><g class="brzn_0bpr"><path class="k0d8hdbwy"/><path class="y4ij6tyga"/><path class="y_-_q-u8u"/><path class="aa_6q9b9u"/><path class="jj_-k1_mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pretzel"} {...others} />);
}

export default Component;
