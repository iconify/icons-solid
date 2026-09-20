import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnsubub4w.css';
import '../../css/s/sao36y9_e.css';
import '../../css/w/wwiawhboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tnsubub4w"/><path class="sao36y9_e"/><path clip-rule="evenodd" class="wwiawhboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:file-zip-filled"} {...others} />);
}

export default Component;
