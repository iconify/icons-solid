import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tghaxetbg.css';
import '../../css/q/qoi2yua0n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqbqJgrTG"><g class="v3_i3wktz"><path class="tghaxetbg"/><path class="qoi2yua0n"/></g></mask></defs><path mask="url(#SVGqbqJgrTG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:graphic-design"} {...others} />);
}

export default Component;
