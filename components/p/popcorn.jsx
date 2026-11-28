import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o3zs0wwrm.css';
import '../../css/j/jo0n1h6-a.css';
import '../../css/t/t-ngn6b1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o3zs0wwrm"/><path class="jo0n1h6-a"/><path class="t-ngn6b1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:popcorn"} {...others} />);
}

export default Component;
