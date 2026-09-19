import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/b/bt6y-5bmv.css';
import '../../css/b/bqfgnsbqv.css';
import '../../css/y/yi-i_vb8s.css';
import '../../css/w/wnbbxc35x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXS9Jrcif"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="bt6y-5bmv"/><circle class="bqfgnsbqv"/><path class="yi-i_vb8s"/><path class="wnbbxc35x"/></g></mask></defs><path mask="url(#SVGXS9Jrcif)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:death-star"} {...others} />);
}

export default Component;
