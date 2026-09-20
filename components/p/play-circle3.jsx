import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vur7zybmo.css';
import '../../css/q/qitub7b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vur7zybmo"/><path class="qitub7b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:play-circle3"} {...others} />);
}

export default Component;
