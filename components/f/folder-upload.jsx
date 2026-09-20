import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p91qinb-v.css';
import '../../css/k/kjp4pobls.css';
import '../../css/h/hmctd3b8w.css';
import '../../css/u/un351ubge.css';
import '../../css/e/evtploeae.css';
import '../../css/b/b7p7ifbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p91qinb-v"/><path class="kjp4pobls"/><path class="hmctd3b8w"/><path class="un351ubge"/><path class="evtploeae"/><path class="b7p7ifbmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:folder-upload"} {...others} />);
}

export default Component;
