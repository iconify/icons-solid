import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqard8b1c.css';
import '../../css/e/edz9x2t2i.css';
import '../../css/x/xnj0lr11i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4MNkIdef"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="yqard8b1c"/><path class="edz9x2t2i"/><path class="xnj0lr11i"/></g></mask></defs><path mask="url(#SVG4MNkIdef)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:injection"} {...others} />);
}

export default Component;
