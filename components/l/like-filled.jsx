import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfzgy9bhx.css';
import '../../css/h/hzodhrb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zfzgy9bhx"/><path class="hzodhrb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:like-filled"} {...others} />);
}

export default Component;
