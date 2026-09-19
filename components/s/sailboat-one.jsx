import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n22bo8byq.css';
import '../../css/a/ab1wfbc-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJv0Ade4j"><g class="v3_i3wktz"><path class="n22bo8byq"/><path class="ab1wfbc-v"/></g></mask></defs><path mask="url(#SVGJv0Ade4j)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sailboat-one"} {...others} />);
}

export default Component;
