import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yw5ok4b2o.css';
import '../../css/m/mpbaxv_5q.css';
import '../../css/b/b_e_-iblx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="yw5ok4b2o"/><circle class="mpbaxv_5q"/><path class="b_e_-iblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gaming-buttons"} {...others} />);
}

export default Component;
