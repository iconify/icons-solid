import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqthxu2un.css';
import '../../css/n/n1mp2h7vm.css';
import '../../css/p/povs420wf.css';
import '../../css/q/qv3bytbet.css';
import '../../css/s/sovzkxbpq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGI2y6IdVj"><g class="ft5dv1b6b"><path class="yqthxu2un"/><rect transform="rotate(45 34.606 4.908)" class="n1mp2h7vm"/><circle class="povs420wf"/><circle class="qv3bytbet"/><circle class="sovzkxbpq"/></g></mask></defs><path mask="url(#SVGI2y6IdVj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:modify"} {...others} />);
}

export default Component;
