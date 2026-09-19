import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtvztsq6v.css';
import '../../css/v/v-s_jsdhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtvztsq6v"/><path class="v-s_jsdhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:dollar"} {...others} />);
}

export default Component;
