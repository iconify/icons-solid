import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlrjxpbzv.css';
import '../../css/y/y5f2femjw.css';
import '../../css/j/jbe-vzczt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGY07hicwO"><g class="dlrjxpbzv"><path class="y5f2femjw"/><path class="jbe-vzczt"/></g></mask></defs><path mask="url(#SVGY07hicwO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:turn-on"} {...others} />);
}

export default Component;
