import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkybv0bog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkybv0bog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:simcard2-filled"} {...others} />);
}

export default Component;
