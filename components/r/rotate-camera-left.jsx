import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzmu56b-h.css';
import '../../css/b/b64l0dbmf.css';
import '../../css/j/jkon69jfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wzmu56b-h"/><path class="b64l0dbmf"/><path class="jkon69jfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rotate-camera-left"} {...others} />);
}

export default Component;
