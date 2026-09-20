import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6qqj612f.css';
import '../../css/m/myg6gcb0a.css';
import '../../css/o/oi8ocx2dy.css';
import '../../css/i/i96sxrg6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6qqj612f"/><path class="myg6gcb0a"/><path clip-rule="evenodd" class="oi8ocx2dy"/><path class="i96sxrg6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xsgd"} {...others} />);
}

export default Component;
