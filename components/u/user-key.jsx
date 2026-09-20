import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h--dx184e.css';
import '../../css/g/ghya2pbow.css';
import '../../css/n/ny1qr-80o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h--dx184e"/><circle class="ghya2pbow"/><circle class="ny1qr-80o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-key"} {...others} />);
}

export default Component;
