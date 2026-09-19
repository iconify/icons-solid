import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/opzjbv8od.css';
import '../../css/l/l6jzjibfv.css';
import '../../css/t/tajcrsb4s.css';
import '../../css/p/pmz8y74us.css';
import '../../css/s/se_cwc1_g.css';
import '../../css/w/wrpayyb5u.css';
import '../../css/g/gd2jcegbz.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="rggfaqb6e"><path class="opzjbv8od"/><path class="l6jzjibfv"/><path class="tajcrsb4s"/><path class="pmz8y74us"/><path class="se_cwc1_g"/><path class="wrpayyb5u"/><path class="gd2jcegbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dome-light"} {...others} />);
}

export default Component;
