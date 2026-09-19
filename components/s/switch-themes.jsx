import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/hz0tqwbzn.css';
import '../../css/p/p6samz-as.css';
import '../../css/x/xsn_p8bcm.css';
import '../../css/h/h31e_wbyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfh0dGbtH"><g class="gopnm44um"><path clip-rule="evenodd" class="hz0tqwbzn"/><path class="p6samz-as"/><path class="xsn_p8bcm"/><path class="h31e_wbyk"/></g></mask></defs><path mask="url(#SVGfh0dGbtH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:switch-themes"} {...others} />);
}

export default Component;
