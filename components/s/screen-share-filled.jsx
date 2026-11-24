import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nod_500mb.css';
import '../../css/q/qb37dcqql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nod_500mb"/><path class="qb37dcqql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:screen-share-filled"} {...others} />);
}

export default Component;
