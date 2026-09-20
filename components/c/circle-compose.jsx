import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmdm9dbkl.css';
import '../../css/u/u0va5cb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qmdm9dbkl"/><path class="u0va5cb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-compose"} {...others} />);
}

export default Component;
