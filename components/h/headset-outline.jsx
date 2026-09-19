import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/defuaabko.css';
import '../../css/n/n43_i1bug.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="defuaabko"/><path clip-rule="evenodd" class="n43_i1bug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:headset-outline"} {...others} />);
}

export default Component;
