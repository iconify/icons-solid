import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rglylsb5w.css';
import '../../css/r/rjpniljif.css';
import '../../css/t/tw3s6obnb.css';
import '../../css/v/v3canabei.css';
import '../../css/j/j71tgsbte.css';
import '../../css/h/hs0og3bqf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rglylsb5w"/><path class="rjpniljif"/><path class="tw3s6obnb"/><path class="v3canabei"/><path class="j71tgsbte"/><path class="hs0og3bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:au-1x1"} {...others} />);
}

export default Component;
