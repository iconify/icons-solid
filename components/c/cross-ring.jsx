import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tk146ob_t.css';
import '../../css/s/sluqj5bks.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3OxGFd7z"><g class="v3_i3wktz"><path class="tk146ob_t"/><path class="sluqj5bks"/></g></mask></defs><path mask="url(#SVG3OxGFd7z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cross-ring"} {...others} />);
}

export default Component;
