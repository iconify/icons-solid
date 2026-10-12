import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkjebkkrm.css';
import '../../css/x/xsu2qyb6y.css';
import '../../css/h/hy9onbbxk.css';
import '../../css/a/aqv759fpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bkjebkkrm"/><path class="xsu2qyb6y"/><path class="hy9onbbxk"/><path class="aqv759fpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:files-duotone"} {...others} />);
}

export default Component;
