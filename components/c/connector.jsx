import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5j3vqxxv.css';
import '../../css/z/z7nhgab4n.css';
import '../../css/a/arsa_6bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d5j3vqxxv"/><path class="z7nhgab4n"/><path class="arsa_6bhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:connector"} {...others} />);
}

export default Component;
