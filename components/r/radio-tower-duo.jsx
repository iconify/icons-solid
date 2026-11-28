import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyvqwdbjf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lexz42b7p.css';
import '../../css/y/ywj31k8iz.css';
import '../../css/o/oxecvfdvd.css';
import '../../css/a/awd6s5pjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eyvqwdbjf secondary"/><g class="dt0cm9dhy primary"><path class="lexz42b7p"/><path class="ywj31k8iz"/><path class="oxecvfdvd"/><path class="awd6s5pjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:radio-tower-duo"} {...others} />);
}

export default Component;
