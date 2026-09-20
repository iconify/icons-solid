import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls_ypjbmg.css';
import '../../css/u/ucj4b1l1e.css';
import '../../css/g/g4v7ni7qx.css';
import '../../css/r/rqa_vtz4c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ls_ypjbmg"/><circle class="ucj4b1l1e"/><path class="g4v7ni7qx"/><path class="rqa_vtz4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudreve-dark"} {...others} />);
}

export default Component;
