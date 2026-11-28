import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k75jqw9vz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bkhpw8bej.css';
import '../../css/i/izggtwq7w.css';
import '../../css/c/cynb2hb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k75jqw9vz secondary"/><g class="dt0cm9dhy primary"><path class="bkhpw8bej"/><path class="izggtwq7w"/><path class="cynb2hb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-check-duo"} {...others} />);
}

export default Component;
