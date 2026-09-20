import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ezzhktb4f.css';
import '../../css/x/xz3ow3l6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ezzhktb4f"/><path class="xz3ow3l6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:simcard3"} {...others} />);
}

export default Component;
