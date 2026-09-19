import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybntw-bao.css';
import '../../css/u/ut2il9b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ybntw-bao"/><path class="ut2il9b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:eye-closed-solid"} {...others} />);
}

export default Component;
