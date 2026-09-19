import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/i/i5qsszbjh.css';
import '../../css/h/hmbc3ohud.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRXfznbdY"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="i5qsszbjh"/><path class="hmbc3ohud"/></g></mask></defs><path mask="url(#SVGRXfznbdY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:view-grid-detail"} {...others} />);
}

export default Component;
