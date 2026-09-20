import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9c06acrm.css';
import '../../css/z/z0eul8k-i.css';
import '../../css/n/nkv2sfb4k.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGSDTr4cZF"><g class="ft5dv1b6b"><path class="w9c06acrm"/><path clip-rule="evenodd" class="z0eul8k-i"/><path clip-rule="evenodd" class="nkv2sfb4k"/></g></mask></defs><path mask="url(#SVGSDTr4cZF)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-zoom-in-bold"} {...others} />);
}

export default Component;
