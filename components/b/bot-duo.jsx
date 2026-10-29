import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cwuutnbyp.css';
import '../../css/f/f4qqlz9yh.css';
import '../../css/s/ss-bu_bnf.css';
import '../../css/w/w0g3d2b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cwuutnbyp"/><path class="f4qqlz9yh wm-a"/><path class="ss-bu_bnf"/><path class="w0g3d2b7y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bot-duo"} {...others} />);
}

export default Component;
