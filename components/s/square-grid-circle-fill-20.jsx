import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s47ll6kkm.css';
import '../../css/j/j-aqdhbtt.css';
import '../../css/j/jgh0owb4c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s47ll6kkm"/><path class="j-aqdhbtt"/><path class="jgh0owb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:square-grid-circle-fill-20"} {...others} />);
}

export default Component;
