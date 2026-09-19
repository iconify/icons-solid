import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjwem2boo.css';
import '../../css/h/hjgunfmzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jjwem2boo"/><path class="hjgunfmzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:file-upload-outline"} {...others} />);
}

export default Component;
