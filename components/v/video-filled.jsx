import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7spppbyw.css';
import '../../css/v/vutvmustt.css';
import '../../css/k/kb5c4o9xz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="p7spppbyw"/><rect class="vutvmustt"/><path class="kb5c4o9xz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-filled"} {...others} />);
}

export default Component;
