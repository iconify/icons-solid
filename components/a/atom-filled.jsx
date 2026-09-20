import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjxt11j3n.css';
import '../../css/k/kmejg72ch.css';
import '../../css/k/kkj8cetyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bjxt11j3n"/><path clip-rule="evenodd" class="kmejg72ch"/><path class="kkj8cetyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:atom-filled"} {...others} />);
}

export default Component;
