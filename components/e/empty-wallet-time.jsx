import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw28ry-jh.css';
import '../../css/e/e1gw-kwja.css';
import '../../css/g/g5_7laczp.css';
import '../../css/g/gi8pdrn9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gw28ry-jh"/><path class="e1gw-kwja"/><path class="g5_7laczp"/><path class="gi8pdrn9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:empty-wallet-time"} {...others} />);
}

export default Component;
