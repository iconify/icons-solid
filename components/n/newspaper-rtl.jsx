import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtfrwnbwr.css';
import '../../css/z/zhvv4ogqo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qtfrwnbwr"/><path class="zhvv4ogqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:newspaper-rtl"} {...others} />);
}

export default Component;
