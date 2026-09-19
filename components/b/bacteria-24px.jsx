import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuf32_b3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zuf32_b3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:bacteria-24px"} {...others} />);
}

export default Component;
