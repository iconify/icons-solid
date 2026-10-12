import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu7x-vb2t.css';
import '../../css/s/s9u39fbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iu7x-vb2t"/><path class="s9u39fbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:basketball"} {...others} />);
}

export default Component;
