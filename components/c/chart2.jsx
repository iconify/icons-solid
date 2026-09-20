import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/thkg0ud3u.css';
import '../../css/j/jjw88sbws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="thkg0ud3u"/><path class="jjw88sbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chart2"} {...others} />);
}

export default Component;
