import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/i/i4wu_qmue.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLmSdNc1G"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="i4wu_qmue"/></g></mask></defs><path mask="url(#SVGLmSdNc1G)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bottom-bar"} {...others} />);
}

export default Component;
