import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/z3lx3r37r.css';
import '../../css/l/lgog-_bex.css';
import '../../css/h/h9yclccjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGc1pfFsqh"><g class="rohhhzb0l"><path class="z3lx3r37r"/><path class="lgog-_bex"/><path clip-rule="evenodd" class="h9yclccjg"/></g></mask></defs><path mask="url(#SVGc1pfFsqh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:three-d-glasses"} {...others} />);
}

export default Component;
