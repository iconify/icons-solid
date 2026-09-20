import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3mutybsc.css';
import '../../css/v/v1ly1ab1a.css';
import '../../css/p/pf-ypib4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q3mutybsc"/><path class="v1ly1ab1a"/><path class="pf-ypib4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:switch-account-1"} {...others} />);
}

export default Component;
