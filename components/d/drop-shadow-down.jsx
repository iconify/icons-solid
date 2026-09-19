import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/coe1g67pu.css';
import '../../css/w/w66q37m7c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjpVwVbCe"><g class="hv130ab-t"><path clip-rule="evenodd" class="coe1g67pu"/><path class="w66q37m7c"/></g></mask></defs><path mask="url(#SVGjpVwVbCe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:drop-shadow-down"} {...others} />);
}

export default Component;
