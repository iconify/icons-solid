import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wszt9mr6r.css';
import '../../css/z/zurn3powf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wszt9mr6r"/><path class="zurn3powf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:upload-outline"} {...others} />);
}

export default Component;
