import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iudi4hfwd.css';
import '../../css/l/l8rtx08ws.css';
import '../../css/k/k-4btpb0e.css';

const viewBox = {"width":1000,"height":1000.005};
const content = `<path class="iudi4hfwd"/><path class="l8rtx08ws"/><path class="k-4btpb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cnn-international"} {...others} />);
}

export default Component;
