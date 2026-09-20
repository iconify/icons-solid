import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/abv16i9-e.css';
import '../../css/c/cl8f37snz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="abv16i9-e"/><path class="cl8f37snz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:blood-drop"} {...others} />);
}

export default Component;
