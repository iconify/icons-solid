import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vbzbqg9av.css';
import '../../css/x/x1vm6db2y.css';
import '../../css/x/xsb0bgv9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vbzbqg9av"/><path class="x1vm6db2y"/><path class="xsb0bgv9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:restart-broken"} {...others} />);
}

export default Component;
