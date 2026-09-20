import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xwupy3nfc.css';
import '../../css/c/c49jkyboi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xwupy3nfc"/><path class="c49jkyboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-spark"} {...others} />);
}

export default Component;
