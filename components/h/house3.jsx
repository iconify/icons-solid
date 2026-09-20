import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/s/sjowjbelj.css';
import '../../css/n/nf2gnv5pg.css';
import '../../css/v/va1uczbpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="sjowjbelj"/><path class="nf2gnv5pg"/><path class="va1uczbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:house3"} {...others} />);
}

export default Component;
