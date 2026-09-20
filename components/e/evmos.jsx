import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1_6vmh0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z1_6vmh0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:evmos"} {...others} />);
}

export default Component;
