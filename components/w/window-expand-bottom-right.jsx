import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rd0kclqig.css';
import '../../css/t/tm2ejbc6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rd0kclqig"/><path class="tm2ejbc6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:window-expand-bottom-right"} {...others} />);
}

export default Component;
