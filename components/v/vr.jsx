import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kffahnbbr.css';
import '../../css/m/mozq0wb3k.css';
import '../../css/m/mgux98c7x.css';
import '../../css/n/nltiuzm9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kffahnbbr"/><path clip-rule="evenodd" class="mozq0wb3k"/><path clip-rule="evenodd" class="mgux98c7x"/><path class="nltiuzm9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vr"} {...others} />);
}

export default Component;
