import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xzkp8w4-s.css';
import '../../css/q/qc6zml-vw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGr1BG7bpF"><g class="v3_i3wktz"><path class="xzkp8w4-s"/><path class="qc6zml-vw"/></g></mask></defs><path mask="url(#SVGr1BG7bpF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:experiment-one"} {...others} />);
}

export default Component;
