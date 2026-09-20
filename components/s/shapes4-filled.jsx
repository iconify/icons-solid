import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnt95obyn.css';
import '../../css/f/f8bwbc8sh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nnt95obyn"/><path class="f8bwbc8sh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shapes4-filled"} {...others} />);
}

export default Component;
