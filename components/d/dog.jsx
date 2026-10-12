import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ul7faub8f.css';
import '../../css/v/vjzle0-2a.css';
import '../../css/s/sk6yx2hhy.css';
import '../../css/y/ycp60cwpz.css';
import '../../css/g/gj4ws9bin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ul7faub8f"/><path class="vjzle0-2a"/><path class="sk6yx2hhy"/><path class="ycp60cwpz"/><path class="gj4ws9bin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dog"} {...others} />);
}

export default Component;
