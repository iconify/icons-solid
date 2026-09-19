import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ih_h_dn1q.css';
import '../../css/n/n9-40i5zf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><circle class="ih_h_dn1q"/><path class="n9-40i5zf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:location"} {...others} />);
}

export default Component;
