import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ut32ur4ud.css';
import '../../css/b/b17u35b3a.css';
import '../../css/o/o8qkkzbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ut32ur4ud"/><path class="b17u35b3a"/><path class="o8qkkzbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:coin-filled"} {...others} />);
}

export default Component;
