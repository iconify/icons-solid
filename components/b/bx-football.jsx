import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xaqvmrv5k.css';
import '../../css/p/pd26jybbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xaqvmrv5k"/><path class="pd26jybbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-football"} {...others} />);
}

export default Component;
