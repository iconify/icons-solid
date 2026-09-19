import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vyhagdbsz.css';
import '../../css/d/d6rjz8b6d.css';
import '../../css/n/nmd1vcbvh.css';
import '../../css/t/tewkg6wrh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGq3aKMctS"><g class="rohhhzb0l"><path class="vyhagdbsz"/><path class="d6rjz8b6d"/><circle class="nmd1vcbvh"/><path class="tewkg6wrh"/></g></mask></defs><path mask="url(#SVGq3aKMctS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:robot-two"} {...others} />);
}

export default Component;
