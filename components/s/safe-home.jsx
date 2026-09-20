import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/agsi3rljr.css';
import '../../css/h/hh450obxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="agsi3rljr"/><path class="hh450obxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:safe-home"} {...others} />);
}

export default Component;
