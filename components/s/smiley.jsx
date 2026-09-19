import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/b/bxbtl1b7w.css';
import '../../css/i/ii51yubpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="bxbtl1b7w"/><path class="ii51yubpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:smiley"} {...others} />);
}

export default Component;
