import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkieo5brz.css';
import '../../css/v/vi8de4bfs.css';
import '../../css/l/l8scj5ofw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnOHGUbKR"><g class="ft5dv1b6b"><path class="xkieo5brz"/><path class="vi8de4bfs"/><path class="l8scj5ofw"/></g></mask></defs><path mask="url(#SVGnOHGUbKR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:skate"} {...others} />);
}

export default Component;
