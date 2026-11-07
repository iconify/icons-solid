import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svqnb4b4e.css';
import '../../css/u/us2chjbxo.css';
import '../../css/y/yxw2mbcmw.css';
import '../../css/j/jfhx-4j7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="svqnb4b4e"/><path class="us2chjbxo"/><path class="yxw2mbcmw"/><path class="jfhx-4j7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-minimalistic-outline"} {...others} />);
}

export default Component;
