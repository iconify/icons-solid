import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/w19zccbwk.css';
import '../../css/w/w0ggckbeu.css';
import '../../css/p/p7b_6qbai.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7r2njetO"><g class="rohhhzb0l"><circle class="w19zccbwk"/><path class="w0ggckbeu"/><path class="p7b_6qbai"/></g></mask></defs><path mask="url(#SVG7r2njetO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:egg"} {...others} />);
}

export default Component;
