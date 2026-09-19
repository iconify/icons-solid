import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/h/hl2afbehv.css';
import '../../css/v/v3leymbnb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjaCtfb4V"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="hl2afbehv"/><path class="v3leymbnb"/></g></mask></defs><path mask="url(#SVGjaCtfb4V)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-lock"} {...others} />);
}

export default Component;
