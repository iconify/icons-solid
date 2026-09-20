import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rg2yn6nsq.css';
import '../../css/f/f_zcv7kzp.css';
import '../../css/x/xnqr7lbbq.css';
import '../../css/o/ozadwqb6i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="rg2yn6nsq"/><path class="f_zcv7kzp"/><path class="xnqr7lbbq"/><path class="ozadwqb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:download-box-2"} {...others} />);
}

export default Component;
