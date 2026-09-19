import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iwzlfdbma.css';
import '../../css/m/mtcvzm4un.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2V9Pcd8x"><g class="rohhhzb0l"><rect class="iwzlfdbma"/><path class="mtcvzm4un"/></g></mask></defs><path mask="url(#SVG2V9Pcd8x)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chip"} {...others} />);
}

export default Component;
