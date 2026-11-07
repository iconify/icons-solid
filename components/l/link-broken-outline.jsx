import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks9itzb5x.css';
import '../../css/a/av07jwwcc.css';
import '../../css/e/edp79wbbi.css';
import '../../css/n/n-ppa3b-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ks9itzb5x"/><path class="av07jwwcc"/><path class="edp79wbbi"/><path class="n-ppa3b-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-broken-outline"} {...others} />);
}

export default Component;
