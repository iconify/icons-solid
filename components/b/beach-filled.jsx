import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7c0-q0sw.css';
import '../../css/s/sgg5g4blt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v7c0-q0sw"/><path class="sgg5g4blt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:beach-filled"} {...others} />);
}

export default Component;
