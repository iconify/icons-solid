import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i17321bsh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/as0h4gb1d.css';
import '../../css/n/nodmk3bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i17321bsh secondary"/><g class="dt0cm9dhy primary"><path class="as0h4gb1d"/><path class="nodmk3bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sparkles-duo"} {...others} />);
}

export default Component;
