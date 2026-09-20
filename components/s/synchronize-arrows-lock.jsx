import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q74f6xbpm.css';
import '../../css/d/dldid0mvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q74f6xbpm"/><path class="dldid0mvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:synchronize-arrows-lock"} {...others} />);
}

export default Component;
