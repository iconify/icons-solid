import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bzk2ng9yc.css';
import '../../css/i/iz7o08dmv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZYLLyNIJ"><g class="v3_i3wktz"><path class="bzk2ng9yc"/><path class="iz7o08dmv"/></g></mask></defs><path mask="url(#SVGZYLLyNIJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chart-ring"} {...others} />);
}

export default Component;
