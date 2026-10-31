import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xnxnf3ggo.css';
import '../../css/k/kljznmb2f.css';
import '../../css/r/r7xdfqnjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xnxnf3ggo"/><path class="kljznmb2f wm-shadow"/><path class="r7xdfqnjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:audio-lines"} {...others} />);
}

export default Component;
