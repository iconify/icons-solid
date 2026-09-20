import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rd2hxhb-u.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/f/fxwnb7vgp.css';
import '../../css/p/p9vjoqtlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rd2hxhb-u"/><circle class="xtsrmvj7o"/><circle class="bopi9b9jn"/><circle class="fxwnb7vgp"/><circle class="p9vjoqtlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:vector-square"} {...others} />);
}

export default Component;
