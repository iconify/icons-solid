import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qyzbm2v5d.css';
import '../../css/n/n0qw2rb8w.css';
import '../../css/o/oyrnahbhe.css';
import '../../css/z/zl8syfbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qyzbm2v5d"/><path class="n0qw2rb8w wm-shine"/><path class="oyrnahbhe wm-k"/><path class="wm-a zl8syfbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:donut"} {...others} />);
}

export default Component;
