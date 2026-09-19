import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/e8vw6-0ba.css';
import '../../css/a/a_r8tk11v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEyxHnena"><g class="rohhhzb0l"><circle class="e8vw6-0ba"/><path class="a_r8tk11v"/></g></mask></defs><path mask="url(#SVGEyxHnena)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:taurus"} {...others} />);
}

export default Component;
