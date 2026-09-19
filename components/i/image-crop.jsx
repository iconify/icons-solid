import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cvs2z244w.css';
import '../../css/p/p8hky2b0f.css';
import '../../css/j/jkrbe9b9z.css';
import '../../css/g/g3fwlbwlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cvs2z244w"/><path class="p8hky2b0f"/><path class="jkrbe9b9z"/><circle class="g3fwlbwlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-crop"} {...others} />);
}

export default Component;
