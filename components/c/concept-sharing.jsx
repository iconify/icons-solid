import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/za087rbox.css';
import '../../css/a/artd7ybar.css';
import '../../css/y/y1g8qib3o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGM68Q7c2T"><g class="rohhhzb0l"><path class="za087rbox"/><path clip-rule="evenodd" class="artd7ybar"/><path class="y1g8qib3o"/></g></mask></defs><path mask="url(#SVGM68Q7c2T)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:concept-sharing"} {...others} />);
}

export default Component;
