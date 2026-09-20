import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nkpbl8y9v.css';
import '../../css/m/mio52ig2b.css';
import '../../css/e/ez1x61b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nkpbl8y9v"/><circle class="mio52ig2b"/><circle class="ez1x61b2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-round-cog"} {...others} />);
}

export default Component;
