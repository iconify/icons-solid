import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eevefobbg.css';
import '../../css/v/vh_x9ccjq.css';
import '../../css/b/bku4shbfc.css';
import '../../css/l/lob6lbb2k.css';
import '../../css/g/gbkh3v4as.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eevefobbg"/><path class="vh_x9ccjq"/><path class="bku4shbfc"/><path class="lob6lbb2k"/><circle class="gbkh3v4as"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:snake"} {...others} />);
}

export default Component;
