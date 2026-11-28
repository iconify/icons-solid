import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aa8ym_b1a.css';
import '../../css/m/m6a3e3btz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aa8ym_b1a"/><rect class="m6a3e3btz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hard-drive-download"} {...others} />);
}

export default Component;
