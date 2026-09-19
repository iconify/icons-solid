import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wjmi2eb4l.css';
import '../../css/e/ej3cr6b9e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbQ8yscDi"><g class="v3_i3wktz"><rect class="wjmi2eb4l"/><path class="ej3cr6b9e"/></g></mask></defs><path mask="url(#SVGbQ8yscDi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:unlock"} {...others} />);
}

export default Component;
