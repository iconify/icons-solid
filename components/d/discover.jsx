import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/k/k5m2if1qz.css';
import '../../css/w/wgz_qwbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="k5m2if1qz"/><path class="wgz_qwbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:discover"} {...others} />);
}

export default Component;
