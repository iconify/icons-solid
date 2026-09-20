import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xw8n86b0s.css';
import '../../css/v/vup9pkr5d.css';
import '../../css/r/rbhdlzqaw.css';
import '../../css/u/uhu1c0b3t.css';
import '../../css/p/p1wktjvtf.css';
import '../../css/o/o6j70-h6l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xw8n86b0s"/><path class="vup9pkr5d"/><path class="rbhdlzqaw"/><path class="uhu1c0b3t"/><path class="p1wktjvtf"/><path class="o6j70-h6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:video-close-captioning"} {...others} />);
}

export default Component;
