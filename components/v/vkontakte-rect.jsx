import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gunf1bbcg.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="gunf1bbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:vkontakte-rect"} {...others} />);
}

export default Component;
