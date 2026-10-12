import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5kjwxi-y.css';
import '../../css/s/sfxd5dbfo.css';
import '../../css/k/kdqg8gh-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r5kjwxi-y"/><path class="sfxd5dbfo"/><path class="kdqg8gh-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-gif"} {...others} />);
}

export default Component;
