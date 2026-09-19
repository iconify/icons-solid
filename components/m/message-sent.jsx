import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/c8jtaacin.css';
import '../../css/l/l9oi_4b2p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBrQMxecJ"><g class="wwvp95byt"><path class="c8jtaacin"/><path class="l9oi_4b2p"/></g></mask></defs><path mask="url(#SVGBrQMxecJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:message-sent"} {...others} />);
}

export default Component;
