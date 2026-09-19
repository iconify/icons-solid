import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdnh22bar.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1vttpb1l.css';
import '../../css/y/y3owh01jo.css';
import '../../css/p/poau05w8s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tdnh22bar"/><g class="cuyn6tgcc"><path class="f1vttpb1l"/><path class="y3owh01jo"/></g><path class="poau05w8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:lua-wordmark"} {...others} />);
}

export default Component;
