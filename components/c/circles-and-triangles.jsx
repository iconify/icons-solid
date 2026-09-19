import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/u/u57jl4baq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGc1YJudgW"><g class="rohhhzb0l"><path class="vkcj4bcdm"/><path class="u57jl4baq"/></g></mask></defs><path mask="url(#SVGc1YJudgW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:circles-and-triangles"} {...others} />);
}

export default Component;
