import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt2otpcin.css';
import '../../css/e/e6wnbobdo.css';
import '../../css/i/ik3n-9xvx.css';
import '../../css/r/r-exbihkf.css';
import '../../css/x/xc6115m2b.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dt2otpcin"/><path class="e6wnbobdo"/><path class="ik3n-9xvx"/><path class="r-exbihkf"/><path class="xc6115m2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:peertube"} {...others} />);
}

export default Component;
