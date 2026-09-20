import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwgplcc3u.css';
import '../../css/g/gp0egaclj.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gwgplcc3u"/><circle class="gp0egaclj"/><circle class="bopi9b9jn"/><circle class="fxwnb7vgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:orbit"} {...others} />);
}

export default Component;
