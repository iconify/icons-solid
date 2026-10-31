import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mq7zwiqhb.css';
import '../../css/j/jl73e1lrn.css';
import '../../css/i/im8flh3ra.css';
import '../../css/y/yij8ymbvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mq7zwiqhb wm-shadow"/><path class="jl73e1lrn wm-shadow"/><path class="im8flh3ra"/><path class="yij8ymbvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:external-link"} {...others} />);
}

export default Component;
