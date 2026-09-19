import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgga7abld.css';
import '../../css/s/si50jvboo.css';
import '../../css/k/k-gfreizg.css';
import '../../css/f/f0elirbsr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8Z0dpeyP"><g class="cgga7abld"><path class="si50jvboo"/><path class="k-gfreizg"/><path class="f0elirbsr"/></g></mask></defs><path mask="url(#SVG8Z0dpeyP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:skiing-nordic"} {...others} />);
}

export default Component;
