import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmx4e1bsb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ywgz2xb4b.css';
import '../../css/z/zu3nt_35k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmx4e1bsb secondary"/><g class="dt0cm9dhy primary"><path class="ywgz2xb4b"/><path class="zu3nt_35k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-fog-duo"} {...others} />);
}

export default Component;
