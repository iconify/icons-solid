import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffuelabgd.css';
import '../../css/e/eekg0xfez.css';
import '../../css/l/l5fjtpb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ffuelabgd"/><path class="eekg0xfez"/><path class="l5fjtpb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:eye-slash-filled"} {...others} />);
}

export default Component;
