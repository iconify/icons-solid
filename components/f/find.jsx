import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mxaazra7v.css';
import '../../css/i/i6ln6bcna.css';
import '../../css/v/v-cwrbbvd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsEoBzevV"><g class="rohhhzb0l"><path class="mxaazra7v"/><path class="i6ln6bcna"/><path class="v-cwrbbvd"/></g></mask></defs><path mask="url(#SVGsEoBzevV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:find"} {...others} />);
}

export default Component;
