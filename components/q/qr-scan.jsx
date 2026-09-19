import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvaaipbio.css';
import '../../css/v/v6qkiubvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvaaipbio"/><path class="v6qkiubvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:qr-scan"} {...others} />);
}

export default Component;
