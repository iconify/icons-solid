import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/v/v_vhlcbpc.css';
import '../../css/b/b5p0nplan.css';
import '../../css/m/m4i9sshhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="v_vhlcbpc"/><path class="b5p0nplan"/><path class="m4i9sshhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-rol"} {...others} />);
}

export default Component;
