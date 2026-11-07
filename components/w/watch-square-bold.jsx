import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh_ofebqf.css';
import '../../css/b/ba3k8mbju.css';
import '../../css/w/wwxnslb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vh_ofebqf"/><path clip-rule="evenodd" class="ba3k8mbju"/><path class="wwxnslb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-bold"} {...others} />);
}

export default Component;
