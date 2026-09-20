import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouio2lb8p.css';

const viewBox = {"width":8787.4,"height":6556.1};
const content = `<path class="ouio2lb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:adobe-creative-cloud"} {...others} />);
}

export default Component;
