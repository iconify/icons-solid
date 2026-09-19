import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cpeep6ycm.css';
import '../../css/q/qvra_uwad.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKPxBxciR"><g class="hv130ab-t"><path clip-rule="evenodd" class="cpeep6ycm"/><path class="qvra_uwad"/></g></mask></defs><path mask="url(#SVGKPxBxciR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:download-four"} {...others} />);
}

export default Component;
