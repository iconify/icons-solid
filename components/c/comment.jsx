import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/aroprubhi.css';
import '../../css/q/qdq9k4hbn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGi7L48cQi"><g class="wwvp95byt"><path class="aroprubhi"/><path class="qdq9k4hbn"/></g></mask></defs><path mask="url(#SVGi7L48cQi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:comment"} {...others} />);
}

export default Component;
