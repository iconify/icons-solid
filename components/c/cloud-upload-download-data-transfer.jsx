import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/ks9dzubkm.css';
import '../../css/y/y5ttt9bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ks9dzubkm"/><path class="y5ttt9bcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cloud-upload-download-data-transfer"} {...others} />);
}

export default Component;
