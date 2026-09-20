import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vb57xdezs.css';
import '../../css/w/ww0cs-a5b.css';
import '../../css/l/lsh3gybrg.css';
import '../../css/c/c4pumdbww.css';
import '../../css/a/adtwlobkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vb57xdezs"/><path class="ww0cs-a5b"/><path class="lsh3gybrg"/><path class="c4pumdbww"/><path class="adtwlobkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:whirl"} {...others} />);
}

export default Component;
