import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/viij6dbqe.css';
import '../../css/q/qemtg7_xl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaNPXUb5M"><g class="v3_i3wktz"><path class="viij6dbqe"/><path class="qemtg7_xl"/></g></mask></defs><path mask="url(#SVGaNPXUb5M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bring-forward"} {...others} />);
}

export default Component;
