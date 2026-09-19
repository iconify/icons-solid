import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8bnl6wke.css';
import '../../css/z/zy6g27b_q.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="m8bnl6wke"/><path clip-rule="evenodd" class="zy6g27b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:iphone"} {...others} />);
}

export default Component;
