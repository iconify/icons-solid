import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jjfd7rbye.css';
import '../../css/f/f1r26vbpu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFEM1KGbI"><g class="v3_i3wktz"><path class="jjfd7rbye"/><path class="f1r26vbpu"/></g></mask></defs><path mask="url(#SVGFEM1KGbI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:audit"} {...others} />);
}

export default Component;
