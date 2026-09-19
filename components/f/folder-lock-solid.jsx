import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruobg3brx.css';
import '../../css/n/nr8lbkbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ruobg3brx"/><path class="nr8lbkbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:folder-lock-solid"} {...others} />);
}

export default Component;
