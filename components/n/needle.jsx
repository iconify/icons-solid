import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tpe_wqd8w.css';
import '../../css/w/wpv3vjbqz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGovpcf0OF"><g class="v3_i3wktz"><path class="tpe_wqd8w"/><path class="wpv3vjbqz"/></g></mask></defs><path mask="url(#SVGovpcf0OF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:needle"} {...others} />);
}

export default Component;
