import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9g84w8dg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7v0zjbzo.css';
import '../../css/a/aivyodbgw.css';
import '../../css/k/k8782kb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9g84w8dg secondary"/><g class="dt0cm9dhy primary"><path class="v7v0zjbzo"/><path class="aivyodbgw"/><path class="k8782kb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-asterisk-duo"} {...others} />);
}

export default Component;
