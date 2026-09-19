import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/eg_wvsb4d.css';
import '../../css/f/f0ql7tbff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGa0DOTdgy"><g class="v3_i3wktz"><path class="eg_wvsb4d"/><path class="f0ql7tbff"/></g></mask></defs><path mask="url(#SVGa0DOTdgy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:document-folder"} {...others} />);
}

export default Component;
