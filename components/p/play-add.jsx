import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s6kr55ypt.css';
import '../../css/c/c3qt_cbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s6kr55ypt"/><path class="c3qt_cbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:play-add"} {...others} />);
}

export default Component;
