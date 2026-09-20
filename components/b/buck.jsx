import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iveanybiz.css';
import '../../css/p/p-qjc1xpf.css';
import '../../css/l/ljxetke2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="iveanybiz"><path class="p-qjc1xpf"/><path class="ljxetke2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:buck"} {...others} />);
}

export default Component;
