import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/izh6_c0ky.css';
import '../../css/x/xd71mnt-s.css';
import '../../css/p/pbigjnb-i.css';
import '../../css/p/pl-9ojbvy.css';
import '../../css/s/sw1cfkk-x.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="izh6_c0ky"/><path class="xd71mnt-s"/></g><path transform="matrix(2.21989 0 0 2.21194 1.1 0)" class="pbigjnb-i"/><path transform="matrix(2.21989 0 0 2.21194 1.1 0)" class="pl-9ojbvy"/><path class="sw1cfkk-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pg-4x3"} {...others} />);
}

export default Component;
