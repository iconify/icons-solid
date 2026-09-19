import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im8s7jxin.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="im8s7jxin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:paint-brush-solid"} {...others} />);
}

export default Component;
