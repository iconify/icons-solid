import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtk823bfa.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o3zs0wwrm.css';
import '../../css/j/jo0n1h6-a.css';
import '../../css/t/t-ngn6b1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtk823bfa secondary"/><g class="dt0cm9dhy primary"><path class="o3zs0wwrm"/><path class="jo0n1h6-a"/><path class="t-ngn6b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:popcorn-duo"} {...others} />);
}

export default Component;
