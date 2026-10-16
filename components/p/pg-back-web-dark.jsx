import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr6x52bhh.css';
import '../../css/a/ai5lobbna.css';
import '../../css/t/tkspbcueb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rr6x52bhh"/><path class="ai5lobbna"/><path class="tkspbcueb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pg-back-web-dark"} {...others} />);
}

export default Component;
