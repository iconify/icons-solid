import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s70-klbjy.css';
import '../../css/q/q983_4ola.css';
import '../../css/r/r2brknb5j.css';
import '../../css/c/catmufxid.css';
import '../../css/k/kooj9t3kh.css';
import '../../css/q/qapkbmmbw.css';

const viewBox = {"width":386,"height":276};
const content = `<path class="s70-klbjy"/><circle class="q983_4ola"/><circle class="r2brknb5j"/><path class="catmufxid"/><circle class="kooj9t3kh"/><circle class="qapkbmmbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:the-lounge-dark"} {...others} />);
}

export default Component;
