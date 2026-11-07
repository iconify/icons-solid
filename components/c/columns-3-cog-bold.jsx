import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3lwmsbeo.css';
import '../../css/w/w17zy0bco.css';
import '../../css/d/dan73zqnv.css';
import '../../css/s/shroyfbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3lwmsbeo"/><path clip-rule="evenodd" class="w17zy0bco"/><path class="dan73zqnv"/><path class="shroyfbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-cog-bold"} {...others} />);
}

export default Component;
