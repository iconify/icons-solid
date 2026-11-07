import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1ku6jbdn.css';
import '../../css/j/j18sckbld.css';
import '../../css/y/yqonk1mgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l1ku6jbdn"/><path class="j18sckbld"/><path class="yqonk1mgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-minimalistic-outline"} {...others} />);
}

export default Component;
