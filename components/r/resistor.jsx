import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/u9x8qellr.css';
import '../../css/i/i3yq3qbys.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbWq8PeLv"><g class="v3_i3wktz"><path class="u9x8qellr"/><path class="i3yq3qbys"/></g></mask></defs><path mask="url(#SVGbWq8PeLv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:resistor"} {...others} />);
}

export default Component;
