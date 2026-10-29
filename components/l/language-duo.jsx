import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psv5noyru.css';
import '../../css/q/qhh3n_bdt.css';
import '../../css/o/o40j11b-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="psv5noyru"/><path class="qhh3n_bdt"/><path class="o40j11b-z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:language-duo"} {...others} />);
}

export default Component;
