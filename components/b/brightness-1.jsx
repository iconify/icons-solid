import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8wstgbkt.css';
import '../../css/v/vju1itsyl.css';
import '../../css/i/i4sl-ib2t.css';
import '../../css/w/wx5o7dkec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n8wstgbkt"/><path class="vju1itsyl"/><path class="i4sl-ib2t"/><path class="wx5o7dkec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:brightness-1"} {...others} />);
}

export default Component;
