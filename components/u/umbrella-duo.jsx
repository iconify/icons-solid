import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz-qoubxo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fz90fnpjg.css';
import '../../css/q/qoxrnac0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nz-qoubxo secondary"/><g class="dt0cm9dhy primary"><path class="fz90fnpjg"/><path class="qoxrnac0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:umbrella-duo"} {...others} />);
}

export default Component;
