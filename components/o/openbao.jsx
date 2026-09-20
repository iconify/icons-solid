import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skniqjfmb.css';
import '../../css/d/d6q6fgbmj.css';
import '../../css/t/ts3x6_b7v.css';

const viewBox = {"width":1100,"height":1100};
const content = `<path class="skniqjfmb"/><path class="d6q6fgbmj"/><path class="ts3x6_b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openbao"} {...others} />);
}

export default Component;
