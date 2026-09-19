import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qz06jbkqv.css';
import '../../css/b/b4qpfgbcg.css';
import '../../css/q/q0fvvybgc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUyQBvdTQ"><g class="wwvp95byt"><path class="qz06jbkqv"/><path class="b4qpfgbcg"/><path class="q0fvvybgc"/></g></mask></defs><path mask="url(#SVGUyQBvdTQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:map-draw"} {...others} />);
}

export default Component;
