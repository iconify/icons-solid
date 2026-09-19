import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fkw6amalj.css';
import '../../css/w/wlje7hb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fkw6amalj"/><path class="wlje7hb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:iris-scan"} {...others} />);
}

export default Component;
