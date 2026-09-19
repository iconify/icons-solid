import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8xbv753t.css';
import '../../css/q/quur0k0xi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8xbv753t"/><path class="quur0k0xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-pdf"} {...others} />);
}

export default Component;
