import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfrh6248h.css';
import '../../css/m/mo4e03b2q.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/z/ztgu_b7hj.css';
import '../../css/q/qte5bqb6m.css';
import '../../css/o/o1v5dpbci.css';
import '../../css/r/rvss8j7bh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bfrh6248h"/><path class="mo4e03b2q"/><g class="hzhb0bcwn"><path class="ztgu_b7hj"/><path class="qte5bqb6m"/><path class="o1v5dpbci"/><path class="rvss8j7bh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:radioactive-waste"} {...others} />);
}

export default Component;
