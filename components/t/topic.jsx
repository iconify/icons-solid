import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/edtua7won.css';
import '../../css/v/v8_9z7bdz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPnz9RbDG"><g class="v3_i3wktz"><path class="edtua7won"/><path class="v8_9z7bdz"/></g></mask></defs><path mask="url(#SVGPnz9RbDG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:topic"} {...others} />);
}

export default Component;
