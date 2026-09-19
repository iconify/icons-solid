import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/u3p9f6bio.css';
import '../../css/z/zojcn1z4b.css';
import '../../css/k/kym7xq7br.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhVzlNe3M"><g class="rohhhzb0l"><path class="u3p9f6bio"/><circle transform="rotate(-90 37 8.944)" class="zojcn1z4b"/><path class="kym7xq7br"/></g></mask></defs><path mask="url(#SVGhVzlNe3M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:split-turn-down-left"} {...others} />);
}

export default Component;
