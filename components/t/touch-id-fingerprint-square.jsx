import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvg-fypjl.css';
import '../../css/i/i72_7ab1r.css';
import '../../css/f/feqtfmb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvg-fypjl"/><path class="i72_7ab1r"/><path class="feqtfmb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:touch-id-fingerprint-square"} {...others} />);
}

export default Component;
