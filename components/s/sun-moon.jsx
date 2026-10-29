import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_d5id95k.css';
import '../../css/z/zs3wyi-vt.css';
import '../../css/b/blx--hbxp.css';
import '../../css/v/v6k2dquwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_d5id95k wm-a"/><path class="wm-k zs3wyi-vt"/><path class="blx--hbxp wm-k"/><path class="v6k2dquwv wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sun-moon"} {...others} />);
}

export default Component;
