import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjhr_i_rr.css';
import '../../css/g/gha7hr06n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sjhr_i_rr"/><path class="gha7hr06n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:simcard"} {...others} />);
}

export default Component;
