import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opnjybc5u.css';
import '../../css/a/afp1jxb0a.css';
import '../../css/k/klb71kbpe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opnjybc5u"/><path class="afp1jxb0a"/><path clip-rule="evenodd" class="klb71kbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-file-camera"} {...others} />);
}

export default Component;
