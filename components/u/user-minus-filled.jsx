import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqv09lbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yqv09lbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:user-minus-filled"} {...others} />);
}

export default Component;
