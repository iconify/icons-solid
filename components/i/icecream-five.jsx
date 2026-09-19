import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y808m-bqg.css';
import '../../css/f/fr0tverdm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyR3vmdbA"><g class="rohhhzb0l"><path class="y808m-bqg"/><path class="fr0tverdm"/></g></mask></defs><path mask="url(#SVGyR3vmdbA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:icecream-five"} {...others} />);
}

export default Component;
