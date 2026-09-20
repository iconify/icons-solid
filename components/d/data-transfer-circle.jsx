import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rj3mizb8u.css';
import '../../css/v/vzqaobcxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rj3mizb8u"/><path class="vzqaobcxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-transfer-circle"} {...others} />);
}

export default Component;
