import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vz-dvwm5z.css';
import '../../css/q/q4ik7kbpj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGz8FQVdSf"><g class="v3_i3wktz"><path class="vz-dvwm5z"/><path class="q4ik7kbpj"/></g></mask></defs><path mask="url(#SVGz8FQVdSf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tree-list"} {...others} />);
}

export default Component;
