import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s6kr55ypt.css';
import '../../css/l/l37y_zbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s6kr55ypt"/><path class="l37y_zbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:play-remove"} {...others} />);
}

export default Component;
