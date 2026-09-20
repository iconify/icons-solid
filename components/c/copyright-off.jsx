import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4g7gnbow.css';
import '../../css/e/eu6l9lbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u4g7gnbow"/><path class="eu6l9lbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:copyright-off"} {...others} />);
}

export default Component;
