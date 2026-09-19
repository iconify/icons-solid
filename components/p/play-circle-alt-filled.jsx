import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnv37kbxp.css';
import '../../css/r/r-mn_3bec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fnv37kbxp"/><path class="r-mn_3bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:play-circle-alt-filled"} {...others} />);
}

export default Component;
