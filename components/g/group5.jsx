import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wh_jt-b5n.css';
import '../../css/e/el5a-ybcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wh_jt-b5n"/><path class="el5a-ybcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:group5"} {...others} />);
}

export default Component;
