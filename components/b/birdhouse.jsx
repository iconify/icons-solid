import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq6a7zb7k.css';
import '../../css/w/weluptpcf.css';
import '../../css/b/b0syn8bpf.css';
import '../../css/m/m8piu90si.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rq6a7zb7k"/><path class="weluptpcf"/><circle class="b0syn8bpf"/><path class="m8piu90si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:birdhouse"} {...others} />);
}

export default Component;
