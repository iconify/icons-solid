import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jp4d42b-y.css';
import '../../css/z/zz_clmbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jp4d42b-y"/><path class="zz_clmbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-user-line-duotone"} {...others} />);
}

export default Component;
