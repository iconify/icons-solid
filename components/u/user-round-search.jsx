import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mio52ig2b.css';
import '../../css/l/lfg29bdov.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/w/wc5069bmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="mio52ig2b"/><path class="lfg29bdov"/><circle class="ez1x61b2a"/><path class="wc5069bmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-round-search"} {...others} />);
}

export default Component;
