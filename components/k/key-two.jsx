import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dkr0e0w5v.css';
import '../../css/v/vbi6qvbrt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpIv9ueun"><g class="rohhhzb0l"><circle class="dkr0e0w5v"/><path class="vbi6qvbrt"/></g></mask></defs><path mask="url(#SVGpIv9ueun)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:key-two"} {...others} />);
}

export default Component;
