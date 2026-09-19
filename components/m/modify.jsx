import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqthxu2un.css';
import '../../css/o/odu9prbhq.css';
import '../../css/q/qznx_nb7p.css';
import '../../css/m/mldihacsu.css';
import '../../css/w/w5_ugsbvw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDHsVwdeU"><g class="ft5dv1b6b"><path class="yqthxu2un"/><rect transform="rotate(45 34.606 4.908)" class="odu9prbhq"/><circle class="qznx_nb7p"/><circle class="mldihacsu"/><circle class="w5_ugsbvw"/></g></mask></defs><path mask="url(#SVGDHsVwdeU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:modify"} {...others} />);
}

export default Component;
