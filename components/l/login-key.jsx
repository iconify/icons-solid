import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cufri2bhg.css';
import '../../css/x/xos2nm-7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cufri2bhg"/><path class="xos2nm-7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:login-key"} {...others} />);
}

export default Component;
