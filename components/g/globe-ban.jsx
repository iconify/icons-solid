import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gsj4sma7f.css';
import '../../css/s/s9ygskb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gsj4sma7f"/><circle class="s9ygskb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:globe-ban"} {...others} />);
}

export default Component;
