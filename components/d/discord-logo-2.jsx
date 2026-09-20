import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/x2tqp1bzh.css';
import '../../css/c/c74vzxphf.css';
import '../../css/t/ter52db6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="x2tqp1bzh"/><path class="c74vzxphf"/><path class="ter52db6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:discord-logo-2"} {...others} />);
}

export default Component;
