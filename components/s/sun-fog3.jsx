import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hw4r2936h.css';
import '../../css/l/lno77o1-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hw4r2936h"/><path class="lno77o1-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sun-fog3"} {...others} />);
}

export default Component;
