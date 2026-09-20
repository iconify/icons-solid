import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rnanptb7p.css';
import '../../css/w/wlt3uybxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rnanptb7p"/><circle class="wlt3uybxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mars"} {...others} />);
}

export default Component;
