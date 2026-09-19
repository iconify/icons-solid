import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/a/a7nlqfoyx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfrErJbUE"><g class="adexpl72i"><circle class="kb9zbkb1z"/><path class="a7nlqfoyx"/></g></mask></defs><path mask="url(#SVGfrErJbUE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:red-cross"} {...others} />);
}

export default Component;
