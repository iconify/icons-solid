import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_var8bmb.css';
import '../../css/a/ajpjie7gj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a_var8bmb"/><path class="ajpjie7gj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forward-5-seconds"} {...others} />);
}

export default Component;
